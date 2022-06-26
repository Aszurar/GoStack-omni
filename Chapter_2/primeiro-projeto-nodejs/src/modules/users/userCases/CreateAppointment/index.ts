import { AppointmentRepository } from "../../repositories/implementations/AppointmentRepository";
import { CreateAppointmentsController } from "./CreateAppointmentsController";
import { CreateAppointmentsUseCase } from "./CreateAppointmentsUseCase";


const appointmentRepository = AppointmentRepository.getInstance();
const createAppointmentsUseCase = new CreateAppointmentsUseCase(appointmentRepository);
const createAppointmentsController = new CreateAppointmentsController(createAppointmentsUseCase);

export { createAppointmentsController }