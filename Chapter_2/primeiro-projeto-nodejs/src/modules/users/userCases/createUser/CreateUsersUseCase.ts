import { ICreateUsersDTO, IUsersRepository } from "../../repositories/interfaces/IUsersRepository";


class CreateUsersUseCase {
  constructor(private userRepository: IUsersRepository) { }

  execute({ name, email, password }: ICreateUsersDTO) {
    const isUserAlreadyExists = this.userRepository.findByEmail(email);
    if (isUserAlreadyExists) {
      throw new Error("User already exists!");
    }
    return this.userRepository.create({ name, email, password });
  }
}

export { CreateUsersUseCase }