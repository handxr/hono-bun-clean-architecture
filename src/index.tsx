import { Hono } from "hono";

import { UsersController } from "./features/users/infrastructure/controllers/users.controller";
import { UsersViewController } from "./features/users/infrastructure/controllers/users-view.controller";

const app = new Hono();
const api = new Hono();

const usersController = new UsersController();
const usersViewController = new UsersViewController();

// APP ROUTES

app.get("/", usersViewController.getIndexPage);

// API ROUTES

api.get("/users", usersController.getAllUsers);

app.route("/api", api);

export default app;
