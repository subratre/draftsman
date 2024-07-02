import nodemailer from "nodemailer";

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
