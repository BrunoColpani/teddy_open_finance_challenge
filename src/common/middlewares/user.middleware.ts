import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}
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
