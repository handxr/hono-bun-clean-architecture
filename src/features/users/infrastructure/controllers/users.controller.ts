import { Context } from "hono";

import { GetUsers } from "../../application/get-users";

export class UsersController {
  constructor(private readonly getUsers: GetUsers) {}

  public async getAllUsers(c: Context) {
    const users = await this.getUsers.execute();

    return c.json(users);
  }
}
