import { IUsersRepository } from "../domain/users.repository";

export class DeleteUserUseCase {
  private readonly usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async execute(id: number) {
    return await this.usersRepository.deleteUser(id);
  }
}
