import express, { Request, Response } from "express";
import PhotoController from "../../controllers/photos/PhotoController";
import { auth } from "../../middlewares/auth";
const router: express.Router = express.Router();

const controller: PhotoController = new PhotoController();
router
  .route("/:id")
  .get(auth, (req: Request, res: Response) => {
    controller.findById(req, res);
  })
  .delete(auth, (req: Request, res: Response) => {
    controller.delete(req, res);
  });

router.route("/").get(controller.getAll).post(auth, controller.create);

export default router;
