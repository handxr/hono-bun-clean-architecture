import { Hono } from "hono";
import { GetUsers } from "./features/users/use-cases/get-users";
import { PrismaUsersRepository } from "./features/users/repositories/prisma-users.repository";

import { Layout } from "./components/layout";
import { UsersList } from "./features/users/components/users-list";
import { UsersController } from "./features/users/controllers/users.controller";

const app = new Hono();
const api = new Hono();
const usersController = new UsersController();

// APP ROUTES

app.get("/", async (c) => {
  const users = await new GetUsers(new PrismaUsersRepository()).execute();
  return c.html(
    <Layout>
      <UsersList users={users} />
    </Layout>
  );
});

// API ROUTES

api.get("/users", usersController.getAllUsers);

app.route("/api", api);

export default app;
