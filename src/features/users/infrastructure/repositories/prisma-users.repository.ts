import { PrismaClient, User } from "@prisma/client";

import { IUsersRepository } from "../../domain/users.repository";
import { CreateUserDTO } from "../../domain/create-user.dto";

export class PrismaUsersRepository implements IUsersRepository {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAllUsers(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async createUser(data: CreateUserDTO): Promise<User> {
    return await this.prisma.user.create({ data });
  }

  async deleteUser(id: number): Promise<User> {
    return await this.prisma.user.delete({ where: { id } });
  }

  async updateUser(id: number, data: CreateUserDTO): Promise<User> {
    return await this.prisma.user.update({ where: { id }, data });
  }
}
