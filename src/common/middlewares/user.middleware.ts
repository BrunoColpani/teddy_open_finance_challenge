import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  /**
   * @description Creates an instance of the UserMiddleware.
   * @param {JwtService} jwtService - The JWT service for decoding tokens.
   */
  constructor(private readonly jwtService: JwtService) {}

  /**
   * @description Checks for the Authorization header, decodes the JWT token, and sets the user ID in the request.
   * @param {any} req - The request object.
   * @param {any} res - The response object.
   * @param {() => void} next - The next function.
   */
  use(req: any, res: any, next: () => void) {
    // Check for Authorization header
    if (!req.headers.authorization) {
      req.userId = null;
      next();
      return;
    }

    const [, token] = req.headers.authorization.split(' ');

    try {
      const payload = this.jwtService.decode(token);
      req.userId = payload.id;
    } catch (error) {
      req.userId = null;
    }

    next();
  }
}
