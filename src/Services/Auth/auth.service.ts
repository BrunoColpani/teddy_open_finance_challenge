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

  async validateUser(email: string, password: string): Promise<any> {
    return await this._listUsersService.validateUser(email, password);
  }

  async login(user: UsersModel) {
    const { email, id } = user;
    const payload = { email, id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
