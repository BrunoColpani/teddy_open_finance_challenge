import { Module } from '@nestjs/common';
import { ShortenedUrlsController } from 'src/Controllers/ShortenedUrls/shortened-urls.controller';
import { shortenedUrlsProviders } from 'src/Entities/ShortenedUrls/shortened-urls.provider';
import { DatabaseModule } from 'src/database/database.module';
import { ListShortenedUrlsService } from './list-shortened-urls.service';
import { DeleteShortenedUrlsService } from './delete-shortened-urls.service';
import { CreateShortenedUrlsService } from './create-shortened-urls.service';
import { AddClickShortenedUrlsService } from './add-click-count-shortened-urls.service';
import { UpdatetShortenedUrlsService } from './update-shortened-urls.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ShortenedUrlsController],
  providers: [
    ListShortenedUrlsService,
    CreateShortenedUrlsService,
    DeleteShortenedUrlsService,
    AddClickShortenedUrlsService,
    UpdatetShortenedUrlsService,
    ...shortenedUrlsProviders,
  ],
})
export class ShortenedUrlsModule {}
