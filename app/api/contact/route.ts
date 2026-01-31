import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, organization, phone, message } = body;

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Email to Code Red
    await transporter.sendMail({
      from: `"Code Red Website" <${process.env.EMAIL_USER}>`,
      to: "info@coderedssi.org",
      subject: "New Contact Form Submission",
      replyTo: email,
      html: `
        <strong>Name:</strong> ${name}<br/>
        <strong>Email:</strong> ${email}<br/>
        <strong>Organization:</strong> ${organization || "N/A"}<br/>
        <strong>Phone:</strong> ${phone || "N/A"}<br/><br/>
        <strong>Message:</strong><br/>
        ${message}
      `,
    });

    // Confirmation email to sender
    await transporter.sendMail({
      from: `"Code Red" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your message",
      html: `
        Hi ${name},<br/><br/>
        Thank you for contacting Code Red. We’ve received your message and a member of our team will follow up shortly.<br/><br/>
        — Code Red Safe Schools Initiative
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
