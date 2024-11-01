import express from "express";
import userRoutes from "./users/UserRoutes";
import authRoutes from "./auth/AuthRouters";
import serviceRoutes from "./services/ServiceRoutes";
import emailRoutes from "./email/EmailRoutes";
import PhotoRoutes from "./photos/PhotoRoutes";
import ReportRoutes from "./reports/ReportRoutes";
import AboutRoutes from "./about/AboutRoutes";
import { auth } from "../middlewares/auth";

const router: express.Router = express.Router();

router.use("/users", auth, userRoutes);
router.use("/services", serviceRoutes);
router.use("/", authRoutes);
router.use("/email", emailRoutes);
router.use("/photos", PhotoRoutes);
router.use("/reports", ReportRoutes);
router.use("/about", AboutRoutes);
export default router;
