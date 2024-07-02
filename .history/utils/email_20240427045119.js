import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "outlook.office365.com",
  port: 993,
  secure: true,
  auth: {
    user: "sales@draftsmans.com",
    pass: "Next1804@",
  },
  debug: true,
});

export const sendMail = async (to, subject, html) => {
  const mailOptions = {
    from: "sales@draftsmans.com",
    to,
    subject,
    html,
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log("email sent successfuly");
  } catch (err) {
    console.log(err);
  }
};
