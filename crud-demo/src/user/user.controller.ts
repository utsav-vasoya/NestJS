import { Body, Controller, Get, Post } from '@nestjs/common';
import { Delete, Param, Put } from '@nestjs/common/decorators';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get('/getUser')
    getUser() {
        return this.userService.getUser();
    }

    @Get('/:id')
    getUserById(@Param() record) {
        return this.userService.getUserById(record.id);
    }

    @Post('/postUser')
    postUser(@Body() record) {
        return this.userService.postUser(record);
    }

    @Put('/updateUser')
    updateUser(@Body() record) {
        return this.userService.updateUser(record.id, record);
    }

    @Delete('/deleteUser/:id')
    deleteUser(@Param() record){
        return this.userService.deleteUser(record.id)
    }
}

