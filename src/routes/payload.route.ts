import express from "express";
import { PayloadController } from "../controllers";

const router = express.Router();
const controller = new PayloadController();

// Define routes
router.get("/", controller.login);

export default router;
