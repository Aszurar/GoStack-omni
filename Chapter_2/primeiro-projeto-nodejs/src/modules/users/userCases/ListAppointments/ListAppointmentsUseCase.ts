import { IAppointmentRepository } from "../../repositories/interfaces/IAppointmentRepository";

class ListAppointmentsUseCase {
  constructor(private appointmentsRepository: IAppointmentRepository) { }

  execute() {
    return this.appointmentsRepository.list();
  }

}

export { ListAppointmentsUseCase }