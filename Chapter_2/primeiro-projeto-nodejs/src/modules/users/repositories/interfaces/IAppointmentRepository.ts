import { Appointment } from "../../model/Appointment";

interface ICreateAppointmentDTO {
  provider: string;
  date: Date;
}

interface IAppointmentRepository {
  create({ date, provider }: ICreateAppointmentDTO): Appointment;
  findByDate(date: Date): Appointment | undefined;
  list(): Appointment[];
}

export { IAppointmentRepository, ICreateAppointmentDTO }