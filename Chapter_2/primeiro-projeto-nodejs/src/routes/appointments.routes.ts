import { Router } from "express";
import { createAppointmentsController } from "../modules/users/userCases/CreateAppointment";
import { listAppointmentsController } from "../modules/users/userCases/ListAppointments";


const appointmentsRoutes = Router();

appointmentsRoutes.post("/create", (req, res) => {
  createAppointmentsController.handle(req, res);
})

appointmentsRoutes.get('/', (req, res) => {
  listAppointmentsController.handle(req, res);
})


export { appointmentsRoutes }