import nodemailer from "nodemailer";
import { Resend } from "resend";

const resend = new Resend("re_123456789");

const transporter = nodemailer.createTransport({
  host: "smtp.resend.com",
  port: 465,
  secure: false,
  auth: {
    user: "resend",
    pass: "re_G2nmwPhh_Gp2NJYuiVo7ngMZ9EbDkNa6o",
  },
  debug: true,
});

export const sendMail = async (to, subject, html) => {
  const { data, error } = await resend.emails.send({
    from: "Draftsmans <sales@draftsmans.com>",
    to: ["sales@draftsmans.com"],
    subject: "hello world",
    html: "<strong>it works!</strong>",
  });
};
