import { CreateUserDTO, IUsersRepository } from "../types";

export class CreateUser {
  private readonly usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async execute(data: CreateUserDTO) {
    return await this.usersRepository.createUser(data);
  }
}
