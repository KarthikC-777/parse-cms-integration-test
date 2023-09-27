import app from "./app";
import environmentConfig from "./configs/custom-environment-variables.config";
import payload from "payload";
// env setup
const env = process.env.ENV;

// Connecting to MongoDB and Starting Server
export const startServer = async () => {
  try {
    app?.listen(environmentConfig.APP_PORT, () => {
      console.log(
        `Server is listening on port: http://localhost:${environmentConfig.APP_PORT}/${environmentConfig.ROUTE_VERSION}/${environmentConfig.ROUTE_BASE_PATH} ....`
      );
    });
    await payload.init({
      secret: environmentConfig.PAYLOAD_SECRET,
      mongoURL: environmentConfig.MONGODB_CONNECTION_STRING,
      express: app,
      onInit: async () => {
        payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
      },
    });
  } catch (error: any) {
    console.log(error);

    console.log("Something Went Wrong...!");
  }
};

// Establish http server connection
startServer();

export default app;
