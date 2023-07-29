import { IUsersRepository } from "../types";

export class DeleteUser {
  private readonly usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async execute(id: number) {
    return await this.usersRepository.deleteUser(id);
  }
}
