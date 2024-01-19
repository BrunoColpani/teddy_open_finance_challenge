import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly email: string;

  @IsString({ message: 'Password should be a string' })
  @Length(8, 255, {
    message: 'Password length should be between 8 and 255 characters',
  })
  readonly password: string;

  @IsBoolean({ message: 'Active should be a boolean' })
  @IsOptional()
  readonly active?: boolean;
}
