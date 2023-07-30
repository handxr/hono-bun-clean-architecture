import { Layout } from "@/components/layout";
import { Context } from "hono";
import { UsersList } from "../components/users-list";
import { GetUsers } from "../../application/use-cases/get-users";
import { PrismaUsersRepository } from "../repositories/prisma-users.repository";

export class UsersViewController {
  public async getIndexPage(c: Context) {
    const users = await new GetUsers(new PrismaUsersRepository()).execute();
    return c.html(
      <Layout>
        <UsersList users={users} />
      </Layout>
    );
  }
}
