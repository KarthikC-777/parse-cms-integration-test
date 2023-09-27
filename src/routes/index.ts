import express from "express";
import bookRoute from "./book.route";
import payloadRoute from "./payload.route";
const router = express.Router();

router.use("/books", bookRoute);
router.use("/login", payloadRoute);

export default router;
