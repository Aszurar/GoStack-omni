import { User } from "../../model/User";

interface ICreateUsersDTO {
  name: string;
  email: string;
  password: string;
}

interface IUsersRepository {
  create({ name, email, password }: ICreateUsersDTO): User;
  delete(id: string): void | undefined;
  findById(id: string): User | undefined;
  findByEmail(email: string): User | undefined;
  list(): User[];
}

export { ICreateUsersDTO, IUsersRepository };