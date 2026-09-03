"use client";

import { useState } from "react";

const CONTACT_EMAIL = "hello@monolithstudio.co";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${form.name || "the website"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

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
      <div className="form__actions">
        <button className="btn" type="submit">Send enquiry ↗</button>
        <p className="form__note">
          Opens in your email app. Prefer to write directly? {CONTACT_EMAIL}
        </p>
      </div>
    </form>
  );
}
