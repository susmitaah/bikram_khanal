"use client";

import { useState, type FormEvent } from "react";
import { contactCopy as copy } from "@/content/contact";
import { useLang } from "@/i18n/useLang";
import { cn } from "@/lib/cn";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const { t } = useLang();
  const [status, setStatus] = useState<Status>("idle");
  const [errorCode, setErrorCode] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setErrorCode(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
          website: data.get("website"), // honeypot
        }),
      });

      const json = (await res.json().catch(() => null)) as { ok: boolean; error?: string } | null;
      if (!res.ok || !json?.ok) {
        setErrorCode(json?.error ?? "request_failed");
        setStatus("error");
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setErrorCode(null);
      setStatus("error");
    }
  }

  const errorMessage = errorCode && copy.form.errors[errorCode] ? t(copy.form.errors[errorCode]) : t(copy.form.error);

  const fieldClass =
    "w-full rounded-lg border border-rule bg-paper px-3.5 py-3 text-charcoal transition-colors placeholder:text-charcoal-mute hover:border-charcoal-mute focus:border-navy focus:outline-none focus:ring-4 focus:ring-navy/10";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* honeypot — hidden from real users, left blank */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <label className="block text-sm">
        <span className="mb-1.5 block text-charcoal-soft">{t(copy.form.name)}</span>
        <input name="name" type="text" required minLength={2} className={fieldClass} />
      </label>

      <label className="block text-sm">
        <span className="mb-1.5 block text-charcoal-soft">{t(copy.form.email)}</span>
        <input name="email" type="email" required className={fieldClass} />
      </label>

      <label className="block text-sm">
        <span className="mb-1.5 block text-charcoal-soft">{t(copy.form.subject)}</span>
        <input name="subject" type="text" className={fieldClass} />
      </label>

      <label className="block text-sm">
        <span className="mb-1.5 block text-charcoal-soft">{t(copy.form.message)}</span>
        <textarea name="message" required minLength={10} rows={5} className={cn(fieldClass, "resize-y")} />
      </label>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-maroon px-6 text-[15px] font-medium text-cream shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-maroon-deep hover:shadow-md active:translate-y-0 active:shadow-none disabled:pointer-events-none disabled:opacity-60"
        >
          {status === "sending" ? t(copy.form.sending) : t(copy.form.submit)}
        </button>

        <p role="status" aria-live="polite" className="text-sm">
          {status === "sent" && <span className="text-green-700">{t(copy.form.success)}</span>}
          {status === "error" && <span className="text-maroon">{errorMessage}</span>}
        </p>
      </div>
    </form>
  );
}
