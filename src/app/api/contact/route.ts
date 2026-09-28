import { NextResponse } from "next/server";
import { sendContactMessage } from "@/lib/mailer";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LEN = 4000;

// Best-effort in-memory throttle. Resets on redeploy/restart — fine for a
// small constituency site; swap for a real store (Redis/KV) if traffic grows.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 3;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const { name, email, phone, subject, message, website } = body as Record<string, unknown>;

  // Honeypot: real users never fill this hidden field.
  if (typeof website === "string" && website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json({ ok: false, error: "invalid_name" }, { status: 400 });
  }
  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }
  if (typeof message !== "string" || message.trim().length < 10) {
    return NextResponse.json({ ok: false, error: "invalid_message" }, { status: 400 });
  }
  if (message.length > MAX_MESSAGE_LEN) {
    return NextResponse.json({ ok: false, error: "message_too_long" }, { status: 400 });
  }

  try {
    await sendContactMessage({
      name: name.trim(),
      email: email.trim(),
      phone: typeof phone === "string" ? phone.trim() : undefined,
      subject: typeof subject === "string" ? subject.trim() : undefined,
      message: message.trim(),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] failed to send message:", err);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
