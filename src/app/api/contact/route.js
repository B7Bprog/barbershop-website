import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, phone, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.CONTACT_EMAIL,
      subject: `New message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
