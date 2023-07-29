import { IUsersRepository } from "../types";

export class CreateUser {
  private readonly usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async execute(data: {
    email: string;
    name: string;
    lastName: string;
  }) {
    return await this.usersRepository.createUser(data);
  }
}
