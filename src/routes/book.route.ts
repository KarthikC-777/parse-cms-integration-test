import express from "express";
import { BooksController } from "../controllers";
import { BooksService } from "../services";

const router = express.Router();
const controller = new BooksController();

// Define routes
router.get("/", controller.getAll);

export default router;
