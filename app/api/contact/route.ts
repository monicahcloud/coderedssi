import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { partnerIntakeSchema } from "@/lib/partner/schemas";
import { buildPartnerEmail } from "@/lib/email/contact-email";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (body?.type !== "partner") {
      return NextResponse.json(
        { success: false, message: "Unsupported contact type." },
        { status: 400 },
      );
    }

    const parsed = partnerIntakeSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid partner submission.",
          errors: parsed.error.flatten(),
        },
        { status: 400 },
      );
    }

    const payload = parsed.data;

    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!toEmail || !fromEmail) {
      return NextResponse.json(
        { success: false, message: "Email configuration is missing." },
        { status: 500 },
      );
    }

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: payload.contact.email,
      subject: `New Partner Interest: ${payload.contact.organization}`,
      text: buildPartnerEmail(payload),
    });

    await resend.emails.send({
      from: fromEmail,
      to: payload.contact.email,
      subject: "We received your partnership inquiry",
      text: `Hi ${payload.contact.name},

Thank you for contacting Code Red Safer Schools Initiative.

We’ve received your partnership inquiry and a member of our team will follow up soon.

— Code Red Safer Schools Initiative`,
    });

    return NextResponse.json({
      success: true,
      message: "Partner inquiry submitted successfully.",
    });
  } catch (error) {
    console.error("Partner contact route error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send partner submission." },
      { status: 500 },
    );
  }
}
