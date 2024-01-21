import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { CreateUsersService } from 'src/Services/Users/create-users.service';
import { CreateUserDto } from 'src/Services/Users/dto/create-user.dto';
import { UpdateUserDto } from 'src/Services/Users/dto/update-user.dto';
import { ListUsersService } from 'src/Services/Users/list-users.service';
import { UpdateUsersService } from 'src/Services/Users/update-users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly _listUsersServiceRepository: ListUsersService,
    private readonly _createUsersServiceRepository: CreateUsersService,
    private readonly _updateUsersServiceRepository: UpdateUsersService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this._createUsersServiceRepository.create(createUserDto);
  }

  @Get()
  findAll() {
    return this._listUsersServiceRepository.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._listUsersServiceRepository.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this._updateUsersServiceRepository.update(+id, updateUserDto);
  }
}
