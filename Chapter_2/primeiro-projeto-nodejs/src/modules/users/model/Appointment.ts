import { v4 as uuid } from 'uuid';


class Appointment {
  id?: string;
  provider: string;
  date: Date;
  user: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
    if (this.createdAt) {
      this.createdAt = new Date();
    }
    if (this.updatedAt) {
      this.updatedAt = new Date();
    }
  }
}

export { Appointment }