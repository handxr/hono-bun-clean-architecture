import { CreateUserDTO } from "../domain/create-user.dto";
import { IUsersRepository } from "../domain/users.repository";

export class CreateUser {
  private readonly usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async execute(data: CreateUserDTO) {
    return await this.usersRepository.createUser(data);
  }
}
