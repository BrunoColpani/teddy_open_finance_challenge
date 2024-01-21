import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { Repository } from 'typeorm';
import { ShortenedUrlsModel } from 'src/Entities/ShortenedUrls/shortened-urls.entity';

@Injectable()
export class AddClickShortenedUrlsService {
  constructor(
    @Inject('SHORTENEDURLS_REPOSITORY')
    private readonly _addClickCountShortenedUrlsRepository: Repository<ShortenedUrlsModel>,
  ) {}

  async addClickCount(shortenedUrlId: number) {
    const url = await this._addClickCountShortenedUrlsRepository.findOne({
      where: { id: shortenedUrlId },
    });

    if (url) {
      url.clickCount += 1;
      await this._addClickCountShortenedUrlsRepository.save(url);
      return url;
    } else {
      throw new NotFoundException('Shortened URL not found');
    }
  }
}
