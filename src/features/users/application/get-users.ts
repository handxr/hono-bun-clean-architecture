import { IUsersRepository } from "../domain/users.repository";

export class GetUsersUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}
  async execute() {
    return await this.usersRepository.getAllUsers();
  }
}
