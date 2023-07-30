import { Layout } from "@/components/layout";
import { Context } from "hono";
import { UsersList } from "../views/components/users-list";
import { GetUsers } from "../../application/get-users";
import { CreateUserForm } from "../views/components/create-user-form";
import { CreateUser } from "../../application/create-user";

export class UsersViewController {
  constructor(
    private readonly getUsers: GetUsers,
    private readonly createUser: CreateUser
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

  public async postCreateUser(c: Context) {
    const formData = await c.req.parseBody();
    await this.createUser.execute(formData as any);
    return c.redirect("/");
  }
}
