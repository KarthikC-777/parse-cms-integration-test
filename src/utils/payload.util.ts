import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
export class PayloadUtil {
  constructor(private readonly axiosInstance: AxiosInstance) {
    this.axiosInstance = axios.create({
      baseURL: "http://localhost:8000/api",
    });
  }
  public async payloadLogin(): Promise<AxiosResponse> {
    console.log("Inside the payload login");
    const data = await this.axiosInstance
      .post("/users/login", {
        email: "admin@gmail.com",
        password: "1234",
      })
      .then((response) => {
        return response.data;
      })
      .catch((error: AxiosError) => {
        console.log(
          `${
            this.constructor.name
          }.payloadLogin Error occurred while login in ${JSON.stringify(
            error.response.data
          )}`
        );
        throw new Error();
      });

    return data;
  }
}
