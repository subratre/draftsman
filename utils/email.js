import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "subrat.nbc@gmail.com",
    pass: "heee izto muqd tuzu",
  },
});

export const sendMail = async (to, subject, html) => {
  const mailOptions = {
    from: "subrat.nbc@gmail.com",
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
