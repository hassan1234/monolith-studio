"use client";

import { useState } from "react";

const CONTACT_EMAIL = "hello@monolithstudio.co";

const initial = {
  name: "", email: "", phone: "", location: "",
  type: "Interior Design", budget: "Not sure yet", timeline: "Flexible", message: "",
  consent: false,
  company: "", // honeypot — left empty by people, filled by bots
};

const types = ["Interior Design", "Kitchen Remodel", "Bathroom Remodel", "Basement Renovation", "Whole-Home Renovation", "Specialty Surfaces", "Something else"];
const budgets = ["Not sure yet", "Under $50k", "$50k – $150k", "$150k – $350k", "$350k+"];
const timelines = ["Flexible", "Within 3 months", "3 – 6 months", "6 – 12 months"];

type Status = "idle" | "sending" | "sent" | "error";

export default function StartProjectForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const upd = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
          source: "start-a-project",
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
        <p>Thank you — your brief is with us.</p>
        <p className="form__note">
          A person at the studio reads every one. We will reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" value={form.name} onChange={upd("name")} required />
      </div>
      <div className="form__row">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={form.email} onChange={upd("email")} required />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="tel" value={form.phone} onChange={upd("phone")} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="location">Project location</label>
        <input id="location" type="text" value={form.location} onChange={upd("location")} placeholder="Neighborhood or city" />
      </div>
      <div className="form__row">
        <div className="field">
          <label htmlFor="type">Project type</label>
          <select id="type" value={form.type} onChange={upd("type")}>
            {types.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="budget">Budget</label>
          <select id="budget" value={form.budget} onChange={upd("budget")}>
            {budgets.map((b) => <option key={b}>{b}</option>)}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="timeline">Timeline</label>
        <select id="timeline" value={form.timeline} onChange={upd("timeline")}>
          {timelines.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Tell us about the project</label>
        <textarea id="message" value={form.message} onChange={upd("message")} required />
      </div>

      {/* Honeypot: hidden from people, irresistible to bots. */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.company}
          onChange={upd("company")}
        />
      </div>

      <div className="field field--check">
        <label htmlFor="consent">
          <input
            id="consent"
            type="checkbox"
            checked={form.consent}
            onChange={(e) => setForm({ ...form, consent: e.target.checked })}
          />
          <span>
            I agree to receive calls, texts and emails from Monolith about my enquiry.
            Message and data rates may apply. Reply STOP to opt out.
          </span>
        </label>
      </div>

      <div className="form__actions">
        <button className="btn" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send brief ↗"}
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
