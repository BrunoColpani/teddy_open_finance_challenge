import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { UsersModel } from 'src/Entities/Users/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ListUsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private readonly _listUsersServiceRepository: Repository<UsersModel>,
  ) {}

  /**
   * Returns all users.
   *
   * @returns A list of all users.
   */
  async findAll(): Promise<UsersModel[]> {
    return await this._listUsersServiceRepository.find();
  }

  /**
   * find a user with the given id.
   *
   * @param id - The user ID to find.
   *
   * @returns The user found or `null` if no user matches the ID.
   */
  async findOne(id: number): Promise<UsersModel> {
    return await this._listUsersServiceRepository.findOneOrFail({
      where: { id },
    });
  }

  /**
   * Checks if a user with the provided email exists.
   *
   * @param email (string) - The email of the user to be checked.
   * @returns Promise<boolean> - A promise that resolves to `true` if the email exists, or `false` otherwise.
   * @throws ConflictException - Thrown if the email is already registered.
   */
  async isEmailRegistered(email: string) {
    const userExists = await this._listUsersServiceRepository.findOne({
      where: { email },
    });

    if (userExists) {
      throw new ConflictException(
        'There is already a registered user with this email.',
      );
    }
  }
}
