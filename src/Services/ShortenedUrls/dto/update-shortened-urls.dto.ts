import { PartialType } from '@nestjs/mapped-types';
import { CreateShortenedUrlsDto } from './create-shortened-urls.dto';

export class UpdateShortenedUrlsDto extends PartialType(
  CreateShortenedUrlsDto,
) {}
