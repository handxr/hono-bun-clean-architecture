import { CreateUserDTO } from "../../domain/dtos/create-user.dto";
import { IUsersRepository } from "../../domain/repositories";

export class CreateUser {
  private readonly usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async execute(data: CreateUserDTO) {
    return await this.usersRepository.createUser(data);
  }
}
