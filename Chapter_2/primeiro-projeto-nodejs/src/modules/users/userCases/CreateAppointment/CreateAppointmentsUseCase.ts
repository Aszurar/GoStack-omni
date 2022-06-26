import { IAppointmentRepository, ICreateAppointmentDTO } from "../../repositories/interfaces/IAppointmentRepository";
import { startOfHour } from 'date-fns';

class CreateAppointmentsUseCase {
  constructor(private appointmentRepository: IAppointmentRepository) { }

  execute({ date, provider }: ICreateAppointmentDTO) {

    const appointmentDate = startOfHour(date);

    const isAppointmentAlreadyExists = this.appointmentRepository.findByDate(appointmentDate);

    if (isAppointmentAlreadyExists) {
      throw new Error("Appointment already exists in this date!");
    }

    return this.appointmentRepository.create({ date: appointmentDate, provider });
  }
}

export { CreateAppointmentsUseCase }