 
import { CreateUserUseCase, DeleteUserUseCase, GetUsersUseCase } from "../application";
import { UpdateUserUseCase } from "../application/update-user";
import { UsersController } from "./controllers/users.controller";
 
 
import { PrismaUsersRepository } from "./repositories/prisma-users.repository";

export const prismaUsersRepository = new PrismaUsersRepository();
export const getUsersUseCase = new GetUsersUseCase(prismaUsersRepository);
export const createUserUseCase = new CreateUserUseCase(prismaUsersRepository);
export const deleteUserUseCase = new DeleteUserUseCase(prismaUsersRepository);
export const updateUserUseCase = new UpdateUserUseCase(prismaUsersRepository);
export const usersController = new UsersController(
  getUsersUseCase,
  createUserUseCase,
  deleteUserUseCase,
  updateUserUseCase
);
