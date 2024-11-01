import express, { Request, Response } from "express";
import transporter from "../../controllers/email/Email";
import { auth } from "../../middlewares/auth";
import multer from "multer";
import { SendMailOptions, SentMessageInfo } from "nodemailer";
const router: express.Router = express.Router();
const upload = multer({ dest: "uploads/" });
router
  .route("/")
  .post(upload.single("picture"), (req: Request, res: Response) => {
    const { name, phone, message } = req.body;
    const { file } = req;
    const mailOptions = {
      from: `Обратная связь АМК <amk.vasilevskiy@mail.ru>`,
      to: "me.kratos76@gmail.com",
      subject: `${name}`,
      text: `${message}\nНомер телефона: ${phone}`,
      attachments: file
        ? [
            {
              filename: file.originalname,
              path: file.path,
            },
          ]
        : [],
    };

    transporter.sendMail(
      mailOptions,
      (error: Error | null, info: SentMessageInfo) => {
        if (error) {
          console.log("Error sending email:", error);
          return res.status(500).send("Error sending email");
        }
        console.log("Email sent:", info.response);
        res.status(200).send("Email sent successfully");
      }
    );
  });

export default router;
