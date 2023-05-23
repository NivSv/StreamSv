import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    NotFoundException,
} from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from 'database/node_modules/.prisma/client'

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto)
    }

    @Get()
    async findAll(): Promise<User[]> {
        return await this.userService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<User> {
        return this.userService.findById(+id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(+id, updateUserDto)
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        const user = await this.findOne(id)
        if (!user) throw new NotFoundException('User not found!')
        return this.userService.delete(user)
    }
}
