import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/Services/Auth/auth.service';
import { LocalAuthGuard } from 'src/Services/Auth/guards/local-auth.guard';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginDto } from 'src/Services/Auth/dto/login.dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiOperation({ summary: 'Login with email and password' })
  @ApiBody({
    description: 'AuthLogin DTO',
    type: LoginDto,
    required: true,
  })
  @ApiResponse({
    status: 200,
    description:
      '"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdhYnJpZWwxQGVtYWlsLmNvbSIsInVzZXJOYW1lIjoiR2FicmllbCIsImlkIjoxLCJpYXQiOjE2ODkyNzE4NTgsImV4cCI6MTY4OTI3MzA1OH0.Zjn2s2Lf1RYFRxM2CNYWauV3hsrRjkac8F1Rp3YdaGs"',
  })
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
