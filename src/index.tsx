import { Hono } from "hono";

import { PORT } from "./config/constants";
import {
  usersController,
  usersViewController,
} from "@/features/users/infrastructure/dependencies";

const app = new Hono();
const api = new Hono();

// APP ROUTES
app.get("/", usersViewController.getIndexPage.bind(usersViewController));
app.post(
  "/users",
  usersViewController.createUserView.bind(usersViewController)
);
app.delete(
  "/users/:id",
  usersViewController.deleteUserView.bind(usersController)
);

// API ROUTES
api.get("/users", usersController.getAllUsers.bind(usersController));

// APP MIDDLEWARES
app.route("/api", api);

export default {
  port: PORT,
  fetch: app.fetch,
};
