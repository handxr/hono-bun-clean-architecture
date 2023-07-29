import { IUsersRepository } from "../types";

export class GetUsers {
  private readonly usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute() {
    return await this.usersRepository.getAllUsers();
  }
}
