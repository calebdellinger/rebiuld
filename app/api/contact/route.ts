import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Configure email transport - update with your service credentials
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can use other services like 'SendGrid', 'SMTP', etc.
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"${name}" <${email}>`, // Make it appear from the user's email
      to: "rebuildconstruction@gmail.com", // Your fixed email address
      replyTo: email, // So when you reply, it goes to the user
      subject: `Website Contact: ${subject}`,
      text: `
        Message from: ${name} (${email})
        
        ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h4>Message:</h4>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
//       setStatus({