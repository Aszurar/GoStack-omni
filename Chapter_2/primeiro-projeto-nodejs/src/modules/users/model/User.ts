import { v4 as uuid } from 'uuid';

class User {
  id?: string;
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
    this.createdAt = new Date();
    this.updatedAt = new Date();

  }
}

export { User };
