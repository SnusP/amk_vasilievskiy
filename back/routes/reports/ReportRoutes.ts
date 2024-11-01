import express, { Request, Response } from "express";
import ReportController from "../../controllers/reports/ReportController";
import { auth } from "../../middlewares/auth";
const router: express.Router = express.Router();

const controller: ReportController = new ReportController();
router
  .route("/:id")
  .get(auth, (req: Request, res: Response) => {
    controller.findById(req, res);
  })
  .delete(auth, (req: Request, res: Response) => {
    controller.delete(req, res);
  })
  .patch(auth, (req: Request, res: Response) => {
    controller.update(req, res);
  });

router.route("/").get(controller.getAll).post(controller.create);

export default router;
