import { CreateUserDTO } from "../domain/create-user.dto";
import { IUsersRepository } from "../domain/users.repository";

export class UpdateUserUseCase {
    constructor(private readonly usersRepository: IUsersRepository) {}
    async execute(id: number, data:CreateUserDTO) {
        const user = await this.usersRepository.updateUser(id, data);
        return user;
    }
}