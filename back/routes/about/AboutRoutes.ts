import express, { Request, Response } from "express";
import AboutController from "../../controllers/about/AboutController";
import { auth } from "../../middlewares/auth";
const router: express.Router = express.Router();

const controller: AboutController = new AboutController();

router
  .route("/")
  .get(controller.get)
  .post(auth, controller.create)
  .patch(auth, controller.update);

export default router;
