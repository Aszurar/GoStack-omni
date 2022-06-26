import { Router } from "express";
import { createUsersController } from "../modules/users/userCases/createUser";

const usersRoutes = Router();

usersRoutes.post("/create", (req, res) =>
  createUsersController.handle(req, res)
)

usersRoutes.get("/", (_req, res) =>
  res.status(200).json({ message: "Funciona carai" })
)

export { usersRoutes };