import { CreateUser } from "../application/create-user";
import { GetUsers } from "../application/get-users";
import { UsersViewController } from "./controllers/users-view.controller";
import { UsersController } from "./controllers/users.controller";
import { PrismaUsersRepository } from "./repositories/prisma-users.repository";

export const prismaUsersRepository = new PrismaUsersRepository();
export const getUsers = new GetUsers(prismaUsersRepository);
export const createUser = new CreateUser(prismaUsersRepository);
export const usersController = new UsersController(getUsers, createUser);
export const usersViewController = new UsersViewController(
  getUsers,
  createUser
);
