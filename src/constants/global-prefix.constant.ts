import environmentConfig from "../configs/custom-environment-variables.config";

export const GLOBAL_PREFIX_CONSTANT =
  "/" +
  environmentConfig.ROUTE_VERSION +
  "/" +
  environmentConfig.ROUTE_BASE_PATH;

export default GLOBAL_PREFIX_CONSTANT;
