import { IUsersRepository } from "../domain/users.repository";

export class GetUsers {
  constructor(private readonly usersRepository: IUsersRepository) {}
  async execute() {
    return await this.usersRepository.getAllUsers();
  }
}
