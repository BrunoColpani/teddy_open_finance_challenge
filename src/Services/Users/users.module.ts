import { Module } from '@nestjs/common';
import { UsersController } from 'src/Controllers/Users/users.controller';
import { usersProviders } from 'src/Entities/Users/user.provider';
import { DatabaseModule } from 'src/database/database.module';
import { ListUsersService } from './list-users.service';
import { CreateUsersService } from './create-users.service';
import { UpdateUsersService } from './update-users.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    ListUsersService,
    CreateUsersService,
    UpdateUsersService,
    ...usersProviders,
  ],
})
export class UsersModule {}
