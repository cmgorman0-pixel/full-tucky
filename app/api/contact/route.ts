import { NextResponse } from "next/server";
import { rateLimit, clientIp } from "@/lib/rateLimit";
import { CONTACT_EMAIL } from "@/lib/site";

const escHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[
      c
    ] as string)
  );

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export async function POST(req: Request) {
  const { allowed, retryAfterMs } = rateLimit(`contact:ip:${clientIp(req)}`, {
    max: 5,
    windowMs: 10 * 60 * 1000,
  });
  if (!allowed) {
    return NextResponse.json(
      { error: "Too many requests" },
      {
        status: 429,
        headers: { "Retry-After": String(Math.ceil(retryAfterMs / 1000)) },
      }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field (hidden off-screen in
  // ContactForm.tsx). A non-empty value is a bot. Respond as if the message was
  // sent — don't tip the bot off that it was caught.
  if (String(body.website || "").trim()) {
    return NextResponse.json({ sent: true });
  }

  const firstName = String(body.firstName || "").trim().slice(0, 100);
  const lastName = String(body.lastName || "").trim().slice(0, 100);
  const email = String(body.email || "").trim().slice(0, 200);
  const phone = String(body.phone || "").trim().slice(0, 50);
  const company = String(body.company || "").trim().slice(0, 200);
  const message = String(body.message || "").trim().slice(0, 2000);

  if (!firstName || !email || !message) {
    return NextResponse.json(
      { error: "First name, email, and message are required" },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !fromEmail) {
    // Distinct from both success and error: the client checks `skipped`
    // specifically and shows an honest "email us directly" fallback rather
    // than a false "message sent" confirmation.
    return NextResponse.json({ skipped: true });
  }

  const fullName = [firstName, lastName].filter(Boolean).join(" ");

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#FAF4E8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:520px;margin:32px auto;background:#fff;border-radius:4px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
    <div style="background:#2A211A;padding:20px 28px;">
      <div style="font-size:16px;font-weight:700;color:#FAF4E8;letter-spacing:0.5px;">FULL&#39;TUCKY</div>
      <div style="font-size:11px;color:rgba(250,244,232,0.6);text-transform:uppercase;letter-spacing:1px;margin-top:2px;">New contact form submission</div>
    </div>
    <div style="padding:24px 28px;font-size:14px;color:#2A211A;line-height:1.6;">
      <p style="margin:0 0 8px;"><strong>Name:</strong> ${escHtml(fullName)}</p>
      <p style="margin:0 0 8px;"><strong>Email:</strong> ${escHtml(email)}</p>
      ${phone ? `<p style="margin:0 0 8px;"><strong>Phone:</strong> ${escHtml(phone)}</p>` : ""}
      ${company ? `<p style="margin:0 0 8px;"><strong>Company:</strong> ${escHtml(company)}</p>` : ""}
      <p style="margin-top:18px;white-space:pre-line;">${escHtml(message)}</p>
    </div>
  </div>
</body>
</html>`;

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [CONTACT_EMAIL],
        reply_to: email,
        subject: `Full'Tucky — message from ${fullName || email}`,
        html,
      }),
    });
    if (!r.ok) {
      console.error("Resend delivery failed:", r.status, await r.text());
      return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
    }
    return NextResponse.json({ sent: true });
  } catch (err) {
    console.error("Resend request threw:", err);
    return NextResponse.json({ error: "Delivery failed" }, { status: 500 });
  }
}
