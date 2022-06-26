import { Appointment } from "../../model/Appointment";
import { IAppointmentRepository, ICreateAppointmentDTO } from "../interfaces/IAppointmentRepository";

import { isEqual } from 'date-fns';

class AppointmentRepository implements IAppointmentRepository {
  private appointments: Appointment[];

  private static INSTANCE: AppointmentRepository;

  private constructor() {
    this.appointments = [];
  }

  public static getInstance(): AppointmentRepository {
    if (!AppointmentRepository.INSTANCE) {
      AppointmentRepository.INSTANCE = new AppointmentRepository();
    }
    return AppointmentRepository.INSTANCE;
  }

  create({
    provider,
    date
  }: ICreateAppointmentDTO): Appointment {
    const appointment = new Appointment();
    Object.assign(appointment, { provider, date });

    this.appointments.push(appointment);
    return appointment;
  }

  findByDate(date: Date): Appointment | undefined {
    return this.appointments.find(appointment => isEqual(appointment.date, date));
  }

  list(): Appointment[] {
    return this.appointments;
  }

}

export { AppointmentRepository }