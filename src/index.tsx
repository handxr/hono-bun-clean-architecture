import { Hono } from "hono";

import { PORT } from "./config/constants";
import {
  usersController,
} from "@/features/users/infrastructure/dependencies";

const app = new Hono();
 
 
app.get("/", usersController.getIndexPage.bind(usersController));
app.post(
  "/users",
  usersController.createUserView.bind(usersController)
);
app.put(
  "/users/:id",
  usersController.updateUserView.bind(usersController)
)
app.delete(
  "/users/:id",
  usersController.deleteUserView.bind(usersController)
);

 
 

export default {
  port: PORT,
  fetch: app.fetch,
};
