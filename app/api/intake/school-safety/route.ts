import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { buildSchoolEmail } from "@/lib/email/contact-email";
import { schoolSafetyIntakeSchema } from "@/lib/intake/schemas";

function createIntakeId() {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `CRSSI-${timestamp}-${random}`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = schoolSafetyIntakeSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid intake submission.",
          errors: parsed.error.flatten(),
        },
        { status: 400 },
      );
    }

    const payload = parsed.data;
    const intakeId = createIntakeId();

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
      replyTo: payload.schoolContact.email,
      subject: `New School Safety Intake: ${payload.schoolContact.schoolName}`,
      text: `${buildSchoolEmail(payload)}\n\nReference ID: ${intakeId}`,
    });

    console.log("School intake admin email result:", adminEmailResult);

    if ((adminEmailResult as { error?: unknown })?.error) {
      console.error(
        "Failed sending school intake admin email:",
        adminEmailResult,
      );

      return NextResponse.json(
        {
          success: false,
          message: "Failed to deliver school intake to admin inbox.",
        },
        { status: 500 },
      );
    }

    const confirmationEmailResult = await resend.emails.send({
      from: fromEmail,
      to: payload.schoolContact.email,
      subject: "We received your school safety intake",
      text: `Hi ${payload.schoolContact.contactName},

Thank you for contacting Code Red Safer Schools Initiative.

We’ve received your school safety intake and a member of our team will review it and follow up with you soon.

Reference ID: ${intakeId}

— Code Red Safer Schools Initiative`,
    });

    console.log(
      "School intake confirmation email result:",
      confirmationEmailResult,
    );

    if ((confirmationEmailResult as { error?: unknown })?.error) {
      console.error(
        "Failed sending school intake confirmation email:",
        confirmationEmailResult,
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Your intake was received, but we could not send the confirmation email.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      intakeId,
      message: "School intake submitted successfully.",
    });
  } catch (error) {
    console.error("School intake route error:", error);

    return NextResponse.json(
      { success: false, message: "Failed to send school intake." },
      { status: 500 },
    );
  }
}
