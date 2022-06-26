import { AppointmentRepository } from "../../repositories/implementations/AppointmentRepository";
import { ListAppointmentsController } from "./ListAppointmentsController";
import { ListAppointmentsUseCase } from "./ListAppointmentsUseCase";

const appointmentRepository = AppointmentRepository.getInstance();
const listAppointmentsUseCase = new ListAppointmentsUseCase(appointmentRepository);
const listAppointmentsController = new ListAppointmentsController(listAppointmentsUseCase);

export { listAppointmentsController }