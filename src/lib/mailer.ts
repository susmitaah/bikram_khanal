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
  const raw = process.env.CONTACT_TO_EMAIL ?? site.contact.email.href;
  return raw.replace(/^mailto:/, "");
}

export async function sendContactMessage(payload: ContactPayload) {
  const transport = getTransport();
  const to = registeredEmail();
  const from = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER!;

  await transport.sendMail({
    to,
    from: `"Website Contact Form" <${from}>`,
    replyTo: `"${payload.name}" <${payload.email}>`,
    subject: `[Website] ${payload.subject?.trim() || "New message from constituent"}`,
    text: [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      payload.phone ? `Phone: ${payload.phone}` : null,
      "",
      payload.message,
    ]
      .filter(Boolean)
      .join("\n"),
    html: `
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      ${payload.phone ? `<p><strong>Phone:</strong> ${escapeHtml(payload.phone)}</p>` : ""}
      <p style="white-space:pre-wrap">${escapeHtml(payload.message)}</p>
    `,
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
