import { Request, Response } from "express";
import { BooksService } from "../services";

export class BooksController {
  private readonly service: BooksService = new BooksService();

  // Use arrow function, which automatically binds 'this'
  public getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const books = await this.service.getAllBooks();
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
}
