import { Request, Response } from "express";
import { CreateAppointmentsUseCase } from "./CreateAppointmentsUseCase";
import { parseISO } from 'date-fns';

class CreateAppointmentsController {
  constructor(private createAppointmentsUseCase: CreateAppointmentsUseCase) { }

  handle(req: Request, res: Response): Response {
    const { date, provider } = req.body;
    const parsedDate = parseISO(date)
    try {
      const newAppointment = this.createAppointmentsUseCase.execute({ date: parsedDate, provider });
      return res.status(201).json(newAppointment);
    } catch (err) {
      return res.status(400).json({
        error: err.message || "Unexpected error while creating new appointment"
      });
    }

  }
}

export { CreateAppointmentsController }
