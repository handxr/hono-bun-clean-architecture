import { PrismaClient, User } from "@prisma/client";
import { CreateUserDTO, IUsersRepository } from "../types";

export class PrismaUsersRepository implements IUsersRepository {
  private prisma: PrismaClient;

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
}
