// Import all the dependencies
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import GLOBAL_PREFIX_CONSTANT from "./constants/global-prefix.constant";
import router from "./routes";

dotenv.config();

const app = express();

// Load App Middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
console.log(GLOBAL_PREFIX_CONSTANT);

app.use(GLOBAL_PREFIX_CONSTANT, router);

export default app;
