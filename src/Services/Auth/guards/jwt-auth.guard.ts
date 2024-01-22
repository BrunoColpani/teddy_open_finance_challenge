import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  /**
   * @description Checks if the request can be activated by calling the parent `canActivate` method.
   * @param {ExecutionContext} context - The execution context.
   * @returns {boolean} - Returns the result of the parent `canActivate` method.
   */
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  /**
   * @description Handles the result of the authentication attempt.
   * @param {Error} err - The error that occurred during authentication.
   * @param {any} user - The user object extracted from the token.
   * @throws {UnauthorizedException} - Thrown if authentication fails.
   * @returns {any} - Returns the user object if authentication is successful.
   */
  handleRequest(err, user) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }

    return user;
  }
}
