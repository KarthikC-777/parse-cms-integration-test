import axios from "axios";
import { PayloadUtil } from "../utils/payload.util";

export class PayloadService {
  private readonly payloadUtil: PayloadUtil;
  constructor() {
    this.payloadUtil = new PayloadUtil(axios);
  }
  public async login(): Promise<true> {
    console.log("Service login");

    const response = await this.payloadUtil.payloadLogin();
    console.log(response);

    return true;
  }
}
