"use client";

import { useState } from "react";

const CONTACT_EMAIL = "hello@monolithstudio.co";

const initial = {
  name: "", email: "", phone: "", location: "",
  type: "Interior Design", budget: "Not sure yet", timeline: "Flexible", message: "",
};

const types = ["Interior Design", "Kitchen Remodel", "Bathroom Remodel", "Basement Renovation", "Whole-Home Renovation", "Specialty Surfaces", "Something else"];
const budgets = ["Not sure yet", "Under $50k", "$50k – $150k", "$150k – $350k", "$350k+"];
const timelines = ["Flexible", "Within 3 months", "3 – 6 months", "6 – 12 months"];

export default function StartProjectForm() {
  const [form, setForm] = useState(initial);

  const upd = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project brief — ${form.name || "new enquiry"} (${form.type})`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nLocation: ${form.location}\n\n` +
      `Project type: ${form.type}\nBudget: ${form.budget}\nTimeline: ${form.timeline}\n\n` +
      `Details:\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

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
        <input id="location" type="text" value={form.location} onChange={upd("location")} placeholder="Neighbourhood or city" />
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
      <div className="form__actions">
        <button className="btn" type="submit">Send brief ↗</button>
        <p className="form__note">Opens in your email app. Prefer to write directly? {CONTACT_EMAIL}</p>
      </div>
    </form>
  );
}
