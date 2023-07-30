import { Layout } from "@/components/layout";
import { Context } from "hono";
import { UsersList } from "../components/users-list";
import { GetUsers } from "../../application/get-users";

export class UsersViewController {
  constructor(private readonly getUsers: GetUsers) {}

  public async getIndexPage(c: Context) {
    const users = await this.getUsers.execute();
    return c.html(
      <Layout>
        <UsersList users={users} />
      </Layout>
    );
  }
}
