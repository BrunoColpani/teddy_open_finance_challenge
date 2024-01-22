import { Inject, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersModel } from 'src/Entities/Users/user.entity';
import { Repository } from 'typeorm';
import { generateHash } from 'src/utils/password.utils';
import { ListUsersService } from './list-users.service';

@Injectable()
export class UpdateUsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private readonly _updateUsersServiceRepository: Repository<UsersModel>,
    private readonly _listUsersService: ListUsersService,
  ) {}

  /**
   * Updates an existing user.
   *
   * @param id - The ID of the user to be updated.
   * @param updateUserDto - An object containing the updated data of the user.
   * @throws NotFoundException - Thrown if no user is found with the provided ID.
   * @returns A promise that resolves to the updated user.
   */
  async update(id: number, updateUserDto: UpdateUserDto): Promise<UsersModel> {
    const oldUser = await this._listUsersService.findOne(id);

    if (oldUser.email !== updateUserDto.email) {
      await this._listUsersService.isEmailRegistered(updateUserDto.email);
    }

    let passowrdHash = oldUser.password;
    if (updateUserDto.password) {
      passowrdHash = await generateHash(updateUserDto.password);
    }

    const user = await this._updateUsersServiceRepository.preload({
      ...updateUserDto,
      id,
      password: passowrdHash,
    });

    return await this._updateUsersServiceRepository.save(user);
  }
}
