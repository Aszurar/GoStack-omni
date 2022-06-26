import { UserRepository } from "../../repositories/implementations/UserRepository";
import { CreateUsersController } from "./CreateUsersController";
import { CreateUsersUseCase } from "./CreateUsersUseCase";



const userRepository = UserRepository.getInstance();
const createUsersUseCase = new CreateUsersUseCase(userRepository);
const createUsersController = new CreateUsersController(createUsersUseCase);

export { createUsersController };