import { Context } from "hono";

import { GetUsers } from "../../application/get-users";
import { CreateUser } from "../../application/create-user";
import { DeleteUser } from "../../application/delete-user";

export class UsersController {
  constructor(
    private readonly getUsers: GetUsers,
    private readonly createUser: CreateUser,
    private readonly deleteUser: DeleteUser
  ) {}

  public async getAllUsers(c: Context) {
    const users = await this.getUsers.execute();

    return c.json(users);
  }

  public async createUserApi(c: Context) {
    const user = await c.req.json();

    const createdUser = await this.createUser.execute(user);

    return c.json(createdUser);
  }

  public async deleteUserApi(c: Context) {
    const userId = c.req.param("id");

    await this.deleteUser.execute(+userId);

    return c.body(null);
  }
}
