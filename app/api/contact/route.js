import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validation
    if (!name  || !email  || !subject || !message) {
      return Response.json(
        {
          success: false,
          message: "Please fill in all fields.",
        },
        {
          status: 400,
        }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",

      to: ["sisayabebayew@gmail.com"],

      replyTo: email,

      subject: `Portfolio: ${subject}`,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          
          <h2>New Portfolio Message 🚀</h2>

          <hr />

          <p>
            <strong>Name:</strong>
            ${name}
          </p>

          <p>
            <strong>Email:</strong>
            ${email}
          </p>

          <p>
            <strong>Subject:</strong>
            ${subject}
          </p>

          <br />

          <h3>Message:</h3>

          <div
            style="
              background: #f4f4f5;
              padding: 16px;
              border-radius: 10px;
              white-space: pre-wrap;
            "
          >
            ${message}
          </div>

          <br />

          <hr />

          <p style="color: #777;">
            Sent from your portfolio website.
          </p>

        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        {
          success: false,
          message: error.message,
        },
        {
          status: 400,
        }
      );
    }

    return Response.json(
      {
        success: true,
        message: "Message sent successfully!",
        data,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Server error:", error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}