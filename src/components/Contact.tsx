"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    try {
      setStatus("loading");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-black/[.03] dark:bg-white/[.03] py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold">Contact</h2>
        <p className="mt-3 text-foreground/70">
          Tell us about your project. We usually reply within 24 hours.
        </p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                name="name"
                required
                className="w-full rounded-md border border-black/10 dark:border-white/10 bg-background px-3 py-2"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-black/10 dark:border-white/10 bg-background px-3 py-2"
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Company</label>
            <input
              name="company"
              className="w-full rounded-md border border-black/10 dark:border-white/10 bg-background px-3 py-2"
              placeholder="Company name (optional)"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Budget</label>
            <select
              name="budget"
              className="w-full rounded-md border border-black/10 dark:border-white/10 bg-background px-3 py-2"
              defaultValue="<10k"
            >
              <option value="<10k">Less than $10k</option>
              <option value="10-25k">$10k – $25k</option>
              <option value="25-50k">$25k – $50k</option>
              <option value=">50k">More than $50k</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full rounded-md border border-black/10 dark:border-white/10 bg-background px-3 py-2"
              placeholder="What would you like to build?"
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center rounded-md bg-teal-600 text-white px-5 py-2.5 hover:bg-teal-500 disabled:opacity-50"
            >
              {status === "loading" ? "Sending…" : "Send message"}
            </button>
            <a href="mailto:kminds.solutions@gmail.com" className="text-teal-600 hover:underline">
              or email us directly
            </a>
          </div>

          {status === "success" && (
            <p className="text-green-600">Thanks! We&#39;ll be in touch shortly.</p>
          )}
          {status === "error" && (
            <p className="text-red-600">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}


