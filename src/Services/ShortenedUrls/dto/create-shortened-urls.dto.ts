import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateShortenedUrlsDto {
  @ApiProperty({
    description: 'URL to be shortened',
    example: 'www.google.com',
  })
  @IsNotEmpty()
  @IsString()
  readonly originalUrl: string;
}
