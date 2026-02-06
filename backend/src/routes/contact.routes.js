import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/contact", async (req, res) => {
  const { fullName, email, phone, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // your gmail
        pass: process.env.MAIL_PASS, // app password
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.MAIL_USER}>`,
      to: "yourcompany@gmail.com", // where you want to receive
      subject: `New Contact: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><b>Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

export default router;
