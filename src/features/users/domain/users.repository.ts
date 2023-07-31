import { User } from "@prisma/client";
import { CreateUserDTO } from "./create-user.dto";

export type IUsersRepository = {
  getAllUsers: () => Promise<User[]>;
  createUser: (data: CreateUserDTO) => Promise<User>;
  deleteUser: (id: number) => Promise<User>;
  updateUser: (id: number, data: CreateUserDTO) => Promise<User>;
};
