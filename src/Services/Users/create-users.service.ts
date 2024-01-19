import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { UsersModel } from 'src/Entities/Users/user.entity';
import { ListUsersService } from './list-users.service';
import { generateHash } from 'src/utils/password.utils';

@Injectable()
export class CreateUsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private readonly _createUsersServiceRepository: Repository<UsersModel>,
    private readonly _listUsersService: ListUsersService,
  ) {}

  /**
   * Creates a new user based on the provided data.
   *
   * @param createUserDto - An object containing the data of the user to be created.
   *
   * @returns Promise<UsersModel> - A promise that resolves to the created user.
   */
  async create(createUserDto: CreateUserDto): Promise<UsersModel> {
    await this._listUsersService.isEmailRegistered(createUserDto.email);

    const passowrdHash = await generateHash(createUserDto.password);

    const user = this._createUsersServiceRepository.create({
      ...createUserDto,
      password: passowrdHash,
    });

    return await this._createUsersServiceRepository.save(user);
  }
}
