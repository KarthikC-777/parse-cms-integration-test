import dotenv from "dotenv";

dotenv.config();

export const environmentConfig = {
  MONGODB_CONNECTION_STRING: process.env.MONGODB_CONNECTION_STRING,
  APP_PORT: process.env.PORT || 8000,
  ENV: process.env.NODE_ENV || "DEV",
  PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
  ROUTE_VERSION: "v1",
  ROUTE_BASE_PATH: "api",
};

export default environmentConfig;
