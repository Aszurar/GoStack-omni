import { Request, Response } from "express";
import { CreateUsersUseCase } from "./CreateUsersUseCase";


class CreateUsersController {
  constructor(private createUsersUseCase: CreateUsersUseCase) { }

  handle(req: Request, res: Response): Response {
    const { name, email, password } = req.body;

    try {
      const newUser = this.createUsersUseCase.execute({ name, email, password });
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(400).json({
        error: error.message || "Unexpected error while creating new user"
      })
    }
  }
}

export { CreateUsersController }