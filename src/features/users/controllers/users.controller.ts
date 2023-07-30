import { Context } from "hono";
import { PrismaUsersRepository } from "../repositories/prisma-users.repository";
import { GetUsers } from "../use-cases/get-users";

export class UsersController {
  async getAllUsers(c: Context) {
    const users = await new GetUsers(new PrismaUsersRepository()).execute();
    return c.json(users);
  }
}
