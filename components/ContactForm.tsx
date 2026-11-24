"use client";

import { useState } from "react";

const CONTACT_EMAIL = "hello@monolithstudio.co";

const initial = { name: "", email: "", message: "", company: "" };

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const update = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: "contact",
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("sent");
      setForm(initial);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  if (status === "sent") {
    return (
      <div className="form" role="status" aria-live="polite">
        <p>Thank you — your message is with us.</p>
        <p className="form__note">We will reply within one business day.</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" value={form.name} onChange={update("name")} required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={update("email")} required />
      </div>
      <div className="field">
        <label htmlFor="message">Project / Message</label>
        <textarea id="message" name="message" value={form.message} onChange={update("message")} required />
      </div>

      {/* Honeypot: hidden from people, irresistible to bots. */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.company}
          onChange={update("company")}
        />
      </div>

      <div className="form__actions">
        <button className="btn" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send inquiry ↗"}
        </button>
        {status === "error" ? (
          <p className="form__note" role="alert">
            {error} You can also email {CONTACT_EMAIL}.
          </p>
        ) : (
          <p className="form__note">Prefer to write directly? {CONTACT_EMAIL}</p>
        )}
      </div>
    </form>
  );
}
