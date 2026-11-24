import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Receives website enquiries and forwards them to the GoHighLevel inbound
 * webhook. The webhook URL stays server-side (GHL_WEBHOOK_URL) so it is never
 * exposed in the browser bundle, where bots would find and spam it.
 */

const WEBHOOK_URL = process.env.GHL_WEBHOOK_URL;

const str = (v: unknown, max = 2000) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

const looksLikeEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Malformed request." }, { status: 400 });
  }

  // Honeypot: a real person never fills this in; bots fill every field.
  // Return success so the bot does not learn it was caught.
  if (str(body.company)) return NextResponse.json({ ok: true });

  const name = str(body.name, 200);
  const email = str(body.email, 200);
  const message = str(body.message, 5000);

  if (!name || !email || !looksLikeEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please check your name and email address." },
      { status: 400 }
    );
  }

  if (!WEBHOOK_URL) {
    // Misconfiguration must be loud in logs but never lose the enquiry silently.
    console.error("[enquiry] GHL_WEBHOOK_URL is not set — enquiry not forwarded", {
      name,
      email,
    });
    return NextResponse.json(
      { ok: false, error: "We could not send that just now. Please email hello@monolithstudio.co." },
      { status: 502 }
    );
  }

  const [firstName, ...rest] = name.split(/\s+/);

  const payload = {
    source: str(body.source, 60) || "website",
    full_name: name,
    first_name: firstName,
    last_name: rest.join(" "),
    email,
    phone: str(body.phone, 40),
    project_location: str(body.location, 300),
    project_type: str(body.type, 120),
    budget: str(body.budget, 60),
    timeline: str(body.timeline, 60),
    message,
    consent: body.consent === true,
    page_url: str(body.pageUrl, 500),
    submitted_at: new Date().toISOString(),
  };

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) {
      console.error("[enquiry] webhook rejected", res.status, await res.text().catch(() => ""));
      return NextResponse.json(
        { ok: false, error: "We could not send that just now. Please email hello@monolithstudio.co." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("[enquiry] webhook request failed", err);
    return NextResponse.json(
      { ok: false, error: "We could not send that just now. Please email hello@monolithstudio.co." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
