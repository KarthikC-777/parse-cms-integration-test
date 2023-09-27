import { Request, Response } from "express";
import { PayloadService } from "../services/payload.service";

export class PayloadController {
  private readonly service: PayloadService = new PayloadService();

  // Use arrow function, which automatically binds 'this'
  public login = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await this.service.login();
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
}
