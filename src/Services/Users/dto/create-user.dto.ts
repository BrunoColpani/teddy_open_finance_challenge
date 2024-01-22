import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'Email to user', example: 'bruno@mail.com' })
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @ApiProperty({ description: 'Password to user', example: 'Q1w2e3r4t5y6' })
  @IsNotEmpty()
  @IsString({ message: 'Password should be a string' })
  @Length(8, 255, {
    message: 'Password length should be between 8 and 255 characters',
  })
  readonly password: string;

  @IsBoolean({ message: 'Active should be a boolean' })
  @IsOptional()
  readonly active?: boolean;
}
