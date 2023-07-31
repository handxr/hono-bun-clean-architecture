import { Layout } from "@/components/layout";
import { Context } from "hono";
 
import { CreateUserUseCase, DeleteUserUseCase, GetUsersUseCase } from "../../application";
import { CreateUserView, TableRowView, UsersListView } from "../views";
import { CreateUserDTO } from "../../domain/create-user.dto";
import { UpdateUserUseCase } from "../../application/update-user";

export class UsersController {
  constructor(
    private readonly getUsersUseCase: GetUsersUseCase,
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly deleteUserUseCase: DeleteUserUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase
  ) {}

  public async getIndexPage(c: Context) {
    const users = await this.getUsersUseCase.execute();
    return c.html(
      <Layout>
        <UsersListView users={users} />
         <CreateUserView />
      </Layout>
    );
  }

  public async createUserView(c: Context) {
    const formData = await c.req.parseBody();
    const user = await this.createUserUseCase.execute(formData as CreateUserDTO);
    return c.html(<TableRowView user={user} />);
  }

  public async deleteUserView(c: Context) {
    const userId = c.req.param("id");

    await this.deleteUserUseCase.execute(+userId);

    return c.body(null);
  }

  public async updateUserView(c: Context) {
    const userId = c.req.param("id");
    const formData = await c.req.parseBody();

    const user = await this.updateUserUseCase.execute(+userId, formData as CreateUserDTO);

    return c.html(<TableRowView user={user} />);
  }
}
