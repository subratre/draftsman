import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.resend.com",
  port: 587,
  secure: false,
  auth: {
    user: "resend",
    pass: "re_AU3xhL7g_2JbDg4u1UW7ZykxjK5Hip1G4",
  },
  debug: true,
});

export const sendMail = async (to, subject, html) => {
  const mailOptions = {
    from: "sales@draftsmans.com",
    to,
    subject,
    html,
    validate: false,
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log("email sent successfuly");
  } catch (err) {
    console.log(err);
  }
};
