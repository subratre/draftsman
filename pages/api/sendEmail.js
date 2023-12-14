// pages/api/sendEmail.js
import { sendMail } from "../../utils/email";
sendMail;

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { to, subject, html } = req.body;

    try {
      await sendMail(to, subject, html);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
