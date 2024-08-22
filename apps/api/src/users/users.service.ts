import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/util/prisma';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserInput: CreateUserInput) {
    return this.prisma.user.create({ data: createUserInput });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(uid: string) {
    return this.prisma.user.findUnique({ where: { uid } });
  }

  async update(uid: string, updateUserInput: UpdateUserInput) {
    return this.prisma.user.update({
      where: { uid },
      data: updateUserInput,
    });
  }

  async remove(uid: string) {
    return this.prisma.user.delete({ where: { uid } });
  }
}
