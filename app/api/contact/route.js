 import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["sisayabebayew@gmail.com"],
      replyTo: email,
      subject: subject || `New message from ${name}`,
      html: `
        <div>
          <h2>New Contact Message</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || "No subject"}</p>

          <h3>Message:</h3>
          <p>${message}</p>
        </div>
      ,
    `});

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        {
          message: error.message || "Resend failed to send the email.",
        },
        { status: 400 }
      );
    }

    return Response.json({
      success: true,
      message: "Message sent successfully!",
      data,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      {
        message: error.message || "Unable to send message.",
      },
      { status: 500 }
    );
  }
}