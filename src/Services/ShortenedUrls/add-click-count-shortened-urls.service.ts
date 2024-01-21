import { Inject, Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';
import { ShortenedUrlsModel } from 'src/Entities/ShortenedUrls/shortened-urls.entity';

@Injectable()
export class AddClickShortenedUrlsService {
  constructor(
    @Inject('SHORTENEDURLS_REPOSITORY')
    private readonly _addClickCountShortenedUrlsRepository: Repository<ShortenedUrlsModel>,
  ) {}

  /**
   * @description Increment the click count for a shortened URL.
   * @param {number} shortenedUrlId - The ID of the shortened URL.
   * @returns {Promise<ShortenedUrlsModel>} - The updated shortened URL details.
   */
  async addClickCount(shortenedUrlId: number) {
    const url = await this._addClickCountShortenedUrlsRepository.findOneOrFail({
      where: { id: shortenedUrlId },
    });

    url.clickCount += 1;
    await this._addClickCountShortenedUrlsRepository.save(url);
  }
}
