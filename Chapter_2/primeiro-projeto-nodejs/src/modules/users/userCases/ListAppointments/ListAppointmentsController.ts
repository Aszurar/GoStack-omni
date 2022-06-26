import { Request, Response } from "express";
import { ListAppointmentsUseCase } from "./ListAppointmentsUseCase";

class ListAppointmentsController {
  constructor(private listAppointmentsUseCase: ListAppointmentsUseCase) { }

  handle(_req: Request, res: Response) {
    try {
      const allAppointments = this.listAppointmentsUseCase.execute();
      return res.status(200).json(allAppointments)
    } catch (err) {
      return res.status(400).json({
        error: err.message || "Unexpected error while listing appointments"
      })
    }
  }
}

export { ListAppointmentsController }