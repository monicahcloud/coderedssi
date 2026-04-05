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
      console.error("Missing email configuration:", {
        hasToEmail: Boolean(toEmail),
        hasFromEmail: Boolean(fromEmail),
      });

      return NextResponse.json(
        { success: false, message: "Email configuration is missing." },
        { status: 500 },
      );
    }

    const adminEmailResult = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: payload.contact.email,
      subject: `New Partner Interest: ${payload.contact.organization}`,
      text: buildPartnerEmail(payload),
    });

    console.log("Partner admin email result:", adminEmailResult);

    if ((adminEmailResult as { error?: unknown })?.error) {
      console.error("Failed sending partner admin email:", adminEmailResult);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to deliver partner inquiry to admin inbox.",
        },
        { status: 500 },
      );
    }

    const confirmationEmailResult = await resend.emails.send({
      from: fromEmail,
      to: payload.contact.email,
      subject: "We received your partnership inquiry",
      text: `Hi ${payload.contact.name},

Thank you for contacting Code Red Safer Schools Initiative.

We’ve received your partnership inquiry and a member of our team will follow up with you soon.

— Code Red Safer Schools Initiative`,
    });

    console.log("Partner confirmation email result:", confirmationEmailResult);

    if ((confirmationEmailResult as { error?: unknown })?.error) {
      console.error(
        "Failed sending partner confirmation email:",
        confirmationEmailResult,
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Your inquiry was received, but we could not send the confirmation email.",
        },
        { status: 500 },
      );
    }

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
