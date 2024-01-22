import { Injectable } from '@nestjs/common';
import { ListUsersService } from '../Users/list-users.service';
import { JwtService } from '@nestjs/jwt';
import { UsersModel } from 'src/Entities/Users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly _listUsersService: ListUsersService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * @description Validates a user by checking the provided email and password.
   * @param {string} email - The email of the user to validate.
   * @param {string} password - The password of the user to validate.
   * @returns {Promise<any>} - A promise that resolves to the validated user.
   */
  async validateUser(email: string, password: string): Promise<any> {
    return await this._listUsersService.validateUser(email, password);
  }

  /**
   * @description Generates an access token for a logged-in user.
   * @param {UsersModel} user - The user for whom to generate the token.
   * @returns {object} - An object containing the generated access token.
   */
  async login(user: UsersModel) {
    const { email, id } = user;
    const payload = { email, id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
