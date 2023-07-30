import { User } from "@prisma/client";

export type IUsersRepository = {
  getAllUsers: () => Promise<User[]>;
  createUser: (data: {
    email: string;
    name: string;
    lastName: string;
  }) => Promise<User>;
  deleteUser: (id: number) => Promise<User>;
};

export type CreateUserDTO = {
  name: string;
  lastName: string;
  email: string;
};
