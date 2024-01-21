import { IsString } from 'class-validator';

export class CreateShortenedUrlsDto {
  @IsString()
  readonly originalUrl: string;
}
