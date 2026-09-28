"use client";

import { useState, type FormEvent } from "react";
import { contactCopy as copy } from "@/content/contact";
import { useLang } from "@/i18n/useLang";
import { cn } from "@/lib/cn";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const { t } = useLang();
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          subject: data.get("subject"),
          message: data.get("message"),
          website: data.get("website"), // honeypot
        }),
      });

      if (!res.ok) throw new Error("request_failed");
      const json = (await res.json()) as { ok: boolean };
      if (!json.ok) throw new Error("send_failed");

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const fieldClass =
    "w-full rounded-sm border border-rule bg-paper px-3.5 py-2.5 text-ink transition-colors placeholder:text-ink-mute hover:border-ink-mute focus:border-ink focus:outline-none";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      {/* honeypot — hidden from real users, left blank */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block text-ink-soft">{t(copy.form.name)}</span>
          <input name="name" type="text" required minLength={2} className={fieldClass} />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-ink-soft">{t(copy.form.email)}</span>
          <input name="email" type="email" required className={fieldClass} />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block text-ink-soft">
            {t(copy.form.phone)} <span className="text-ink-mute">({t(copy.form.optional)})</span>
          </span>
          <input name="phone" type="tel" className={fieldClass} />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-ink-soft">
            {t(copy.form.subject)} <span className="text-ink-mute">({t(copy.form.optional)})</span>
          </span>
          <input name="subject" type="text" className={fieldClass} />
        </label>
      </div>

      <label className="block text-sm">
        <span className="mb-1.5 block text-ink-soft">{t(copy.form.message)}</span>
        <textarea name="message" required minLength={10} rows={5} className={cn(fieldClass, "resize-y")} />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-sm bg-crimson px-5 py-3 text-base font-medium text-paper shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-crimson-deep hover:shadow-md active:translate-y-0 active:shadow-none disabled:pointer-events-none disabled:opacity-60"
        >
          {status === "sending" ? t(copy.form.sending) : t(copy.form.submit)}
        </button>

        <p role="status" aria-live="polite" className="text-sm">
          {status === "sent" && <span className="text-field">{t(copy.form.success)}</span>}
          {status === "error" && <span className="text-crimson">{t(copy.form.error)}</span>}
        </p>
      </div>
    </form>
  );
}
