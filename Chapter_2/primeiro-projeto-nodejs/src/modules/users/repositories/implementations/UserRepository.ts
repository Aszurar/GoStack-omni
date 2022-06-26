import { User } from "../../model/User";
import { ICreateUsersDTO, IUsersRepository } from "../interfaces/IUsersRepository";

class UserRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UserRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UserRepository {
    if (!UserRepository.INSTANCE) {
      UserRepository.INSTANCE = new UserRepository();
    }
    return UserRepository.INSTANCE;
  }

  create({ name, email, password }: ICreateUsersDTO): User {
    const user = new User();
    Object.assign(user, { name, email, password });

    this.users.push(user);
    return user;
  }

  findById(id: string): User | undefined {
    return this.users.find(user => user.id === id);
  }

  findByEmail(email: string): User | undefined {
    return this.users.find(user => user.email === email);

  }

  list(): User[] {
    return this.users;
  }

  delete(id: string): void {
    const userIndex = this.users.findIndex(user => user.id === id);

    this.users.splice(userIndex, 1);
  }
}

export { UserRepository };