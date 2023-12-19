import express from "express";
import sendEmail from "./email.mjs";

const router = express.Router();

router.post("/email", (req, res) => {
  // console.log(req.body);
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res
      .status(400)
      .send({ error: "Please fill in all input", success: false });
  }
  const from = `${email}`;
  const to = "chichebewebdev@gmail.com";
  const subject = "Recruitment message";
  const html = `<ul>
  <li>Name: ${name}</li>
  <li>Email: ${email}</li>
  <li>Message: ${message}</li>
  </ul>`;
  sendEmail(from, to, subject, html);
  return res
    .status(200)
    .send({ msg: "Message successfully sent!", success: true });
});

export default router;
