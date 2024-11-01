import express, { Request, Response } from "express";
import ServiceController from "../../controllers/services/ServiceController";
import { auth } from "../../middlewares/auth";
const router: express.Router = express.Router();

const controller: ServiceController = new ServiceController();
router
  .route("/:id")
  .get(auth, (req: Request, res: Response) => {
    controller.findById(req.params.id, res);
  })
  .delete(auth, (req: Request, res: Response) => {
    controller.delete(req.params.id, res);
  })
  .patch(auth, (req: Request, res: Response) => {
    controller.update(req, res);
  });
router.route("/").get(auth, controller.get).post(auth, controller.create);
router.route("/findByCategory/:category").get((req: Request, res: Response) => {
  controller.findByCategory(req.params.category, res);
});
export default router;
