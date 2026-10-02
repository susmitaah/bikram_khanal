import nodemailer from "nodemailer";
import { site } from "@/content/site";

/**
 * Sends contact-form messages to the politician's registered email.
 * Configure via env: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE.
 * Recipient defaults to CONTACT_TO_EMAIL, falling back to site.contact.email.
 */

export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
};

// Same font stack as the site: Geist first, safe system sans fallback.
// Email clients that don't resolve "Geist" (nearly all of them — custom
// fonts aren't loaded in email) just fall through to the system stack.
const FONT_STACK = "Geist, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";

function getTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    throw new Error(
      "Email is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER and SMTP_PASS in .env.local.",
    );
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT ? Number(SMTP_PORT) : 587,
    secure: SMTP_SECURE === "true",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

function registeredEmail() {
  return process.env.CONTACT_TO_EMAIL ?? site.contact.email;
}

export async function sendContactMessage(payload: ContactPayload) {
  const transport = getTransport();
  const to = registeredEmail();
  const from = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER!;
  const subjectLine = payload.subject?.trim() || `New message from ${payload.name}`;

  await transport.sendMail({
    to,
    // object form lets nodemailer escape the name safely (quotes, commas, etc.
    // in whatever a visitor typed) instead of hand-building the header string
    from: { name: `${payload.name} — Public Concern`, address: from },
    replyTo: { name: payload.name, address: payload.email },
    subject: `[Public Concern] ${subjectLine}`,
    text: [
      `New public concern submitted via the ${site.contact.email} contact form.`,
      "",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      payload.phone ? `Phone: ${payload.phone}` : null,
      payload.subject?.trim() ? `Subject: ${payload.subject.trim()}` : null,
      "",
      payload.message,
      "",
      `Reply directly to this email to respond to ${payload.name}.`,
    ]
      .filter((line) => line !== null)
      .join("\n"),
    html: renderEmailHtml(payload),
  });
}

function renderEmailHtml(payload: ContactPayload) {
  const field = (label: string, value: string) => `
    <tr>
      <td style="padding:0 0 16px;">
        <p style="margin:0 0 4px;font:600 11px/1.4 ${FONT_STACK};letter-spacing:.06em;text-transform:uppercase;color:#a61b2b;">
          ${label}
        </p>
        <p style="margin:0;font:400 15px/1.5 ${FONT_STACK};color:#1f2933;">${value}</p>
      </td>
    </tr>`;

  return `
<!doctype html>
<html>
  <body style="margin:0;padding:0;background-color:#f0ead9;font-family:${FONT_STACK};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0ead9;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e4dfd3;">
            <tr>
              <td style="height:4px;line-height:4px;font-size:0;background-color:#a61b2b;">&nbsp;</td>
            </tr>
            <tr>
              <td style="padding:32px 32px 28px;">
                <p style="margin:0 0 4px;font:700 20px/1.3 ${FONT_STACK};color:#102a43;">New Public Concern</p>
                <p style="margin:0 0 24px;font:400 13px/1.5 ${FONT_STACK};color:#8a94a6;">
                  Submitted via the contact form on ${escapeHtml(site.contact.email)}&rsquo;s website.
                </p>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #e4dfd3;padding-top:20px;">
                  ${field("Full Name", escapeHtml(payload.name))}
                  ${field("Email", `<a href="mailto:${escapeHtml(payload.email)}" style="color:#102a43;text-decoration:underline;">${escapeHtml(payload.email)}</a>`)}
                  ${payload.phone ? field("Phone", `<a href="tel:${escapeHtml(payload.phone)}" style="color:#102a43;text-decoration:underline;">${escapeHtml(payload.phone)}</a>`) : ""}
                  ${payload.subject?.trim() ? field("Subject", escapeHtml(payload.subject.trim())) : ""}
                  <tr>
                    <td style="padding:4px 0 0;">
                      <p style="margin:0 0 4px;font:600 11px/1.4 ${FONT_STACK};letter-spacing:.06em;text-transform:uppercase;color:#a61b2b;">
                        Message
                      </p>
                      <div style="margin:0;padding:14px 16px;background-color:#f8f5ee;border-radius:8px;font:400 15px/1.6 ${FONT_STACK};color:#1f2933;white-space:pre-wrap;">${escapeHtml(payload.message)}</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 32px 24px;border-top:1px solid #e4dfd3;">
                <p style="margin:0;font:400 12px/1.5 ${FONT_STACK};color:#8a94a6;">
                  Reply directly to this email to respond to ${escapeHtml(payload.name)}.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
