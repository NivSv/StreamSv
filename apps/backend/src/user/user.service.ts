import { Inject, Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { PrismaService } from '../prisma.service'
import { User } from 'database/node_modules/.prisma/client'

@Injectable()
export class UserService {
    @Inject(PrismaService) private prisma!: PrismaService

    create(createUserDto: CreateUserDto) {
        return 'This action adds a new user'
    }

    async findAll(): Promise<User[]> {
        return this.prisma.user.findMany()
    }

    async findById(id: number): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: {
                id,
            },
        })
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`
    }

    async delete(user: User): Promise<void> {
        await this.prisma.user.delete({
            where: {
                id: user.id,
            },
        })
    }
}
