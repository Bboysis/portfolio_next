 import { Resend } from "resend";

export async function POST(request) {
  console.log("CONTACT API: request received");

  try {
    const body = await request.json();

    console.log("CONTACT API: body received");

    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    console.log(
      "CONTACT API: RESEND KEY:",
      apiKey ? "FOUND" : "MISSING"
    );

    if (!apiKey) {
      return Response.json(
        {
          success: false,
          message: "RESEND_API_KEY is missing.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    console.log("CONTACT API: sending email...");

    const result = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["sisayabebayew@gmail.com"],
      replyTo: email,
      subject: subject || `New message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Contact Message</h2>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Subject:</strong> ${subject || "No subject"}
          </p>

          <hr />

          <h3>Message</h3>

          <p>
            ${message}
          </p>
        </div>
      `,
    });

    console.log("CONTACT API: RESEND RESULT:", result);

    if (result.error) {
      console.error("RESEND ERROR:", result.error);

      return Response.json(
        {
          success: false,
          message:
            result.error.message || "Resend could not send the email.",
        },
        { status: 400 }
      );
    }

    return Response.json({
      success: true,
      message: "Message sent successfully!",
      data: result.data,
    });
  } catch (error) {
    console.error("CONTACT API CATCH ERROR:", error);

    return Response.json(
      {
        success: false,
        message: error?.message || "Unknown server error.",
      },
      { status: 500 }
    );
  }
}