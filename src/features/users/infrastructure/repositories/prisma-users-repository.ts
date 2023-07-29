import { PrismaClient, User } from "@prisma/client";

class PrismaUsersRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAllUsers(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async createUser(data: {
    email: string;
    name: string;
    lastName: string;
  }): Promise<User> {
    return await this.prisma.user.create({ data });
  }

  async deleteUser(id: number): Promise<User> {
    return await this.prisma.user.delete({ where: { id } });
  }
}

export default new PrismaUsersRepository();
