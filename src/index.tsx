import { Hono } from "hono";
import { GetUsers } from "./features/users/use-cases/get-users";
import { PrismaUsersRepository } from "./features/users/repositories/prisma-users-repository";

import { Layout } from "./features/misc/components/layout";
import { UsersList } from "./features/users/views/users-list";

const app = new Hono();

app.get("/", (c) => c.text("Hello Hono!"));

app.get("/users", async (c) => {
  const users = await new GetUsers(new PrismaUsersRepository()).execute();
  return c.html(
    <Layout>
      <UsersList users={users} />
    </Layout>
  );
});

// app.post("/users", async (c) => {
//   const user = await c.req.json();
//   const users = await new CreateUser(new PrismaUsersRepository()).execute(user);
//   return c.json(users);
// });

export default app;
