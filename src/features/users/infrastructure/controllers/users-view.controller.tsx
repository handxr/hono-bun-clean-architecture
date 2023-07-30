import { Layout } from "@/components/layout";
import { Context } from "hono";
import { UsersList } from "../views/components/users-list";
import { GetUsers } from "../../application/get-users";
import { CreateUserForm } from "../views/components/create-user-form";
import { CreateUser } from "../../application/create-user";
import { DeleteUser } from "../../application/delete-user";
import { TableRow } from "../views/components/table-row";

export class UsersViewController {
  constructor(
    private readonly getUsers: GetUsers,
    private readonly createUser: CreateUser,
    private readonly deleteUser: DeleteUser
  ) {}

  public async getIndexPage(c: Context) {
    const users = await this.getUsers.execute();
    return c.html(
      <Layout>
        <UsersList users={users} />
        <CreateUserForm />
      </Layout>
    );
  }

  public async createUserView(c: Context) {
    const formData = await c.req.parseBody();
    const user = await this.createUser.execute(formData as any);
    return c.html(<TableRow user={user} />);
  }

  public async deleteUserView(c: Context) {
    const userId = c.req.param("id");

    await this.deleteUser.execute(+userId);

    return c.body(null);
  }
}
