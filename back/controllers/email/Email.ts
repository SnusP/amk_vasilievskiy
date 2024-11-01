const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport(
  {
    host: "smtp.mail.ru",
    port: 465,
    secure: true,
    auth: {
      user: "amk.vasilevskiy@mail.ru",
      pass: "Z0jDDfxGNfwbS6YN0aej",
    },
  },
  {}
);

transporter.verify((error: Error, success: boolean) => {
  if (error) {
    console.log("Error with transporter configuration:", error);
  } else {
    console.log("Mailer is ready to send messages");
  }
});

export default transporter;
