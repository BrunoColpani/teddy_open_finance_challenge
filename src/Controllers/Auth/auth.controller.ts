import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/Services/Auth/auth.service';
import { LocalAuthGuard } from 'src/Services/Auth/guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
