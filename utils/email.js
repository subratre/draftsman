import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "subratpandababu@gmail.com",
    pass: "Subrat@123",
  },
});

export const sendMail = async (to, subject, html) => {
  const mailOptions = {
    from: "subratpandababu@gmail.com",
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
