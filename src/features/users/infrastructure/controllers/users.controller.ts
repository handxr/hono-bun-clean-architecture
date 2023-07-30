import { Context } from "hono";

import { GetUsers } from "../../application/use-cases/get-users";

import { PrismaUsersRepository } from "../repositories/prisma-users.repository";

export class UsersController {
  public async getAllUsers(c: Context) {
    const users = await new GetUsers(new PrismaUsersRepository()).execute();
    return c.json(users);
  }
}
