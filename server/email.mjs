import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const sendEmail = async (from, to, subject, html) => {
  const transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    host: process.env.HOST,
    port: process.env.PORT,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const options = {
    from: from,
    to: to,
    subject: subject,
    html: html,
  };
  transporter.sendMail(options, function (error, info) {
    if (error) {
      console.log(error);
    }
  });
};

export default sendEmail;
