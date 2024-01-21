import { Inject, Injectable } from '@nestjs/common';
import { ShortenedUrlsModel } from 'src/Entities/ShortenedUrls/shortened-urls.entity';
import { Repository } from 'typeorm';
import { AddClickShortenedUrlsService } from './add-click-count-shortened-urls.service';

@Injectable()
export class ListShortenedUrlsService {
  constructor(
    @Inject('SHORTENEDURLS_REPOSITORY')
    private readonly _listShortenedUrlsRepository: Repository<ShortenedUrlsModel>,
    private readonly _addClickShortenedUrlsService: AddClickShortenedUrlsService,
  ) {}

  /**
   * @description Find shortened URLs by user ID.
   * @param {number} userId - The ID of the user.
   * @returns {Promise<ShortenedUrlsModel[]>} - List of shortened URLs for the user.
   */
  async findByUserId(userId: number): Promise<ShortenedUrlsModel[]> {
    const urls = await this._listShortenedUrlsRepository.find({
      where: { userId, active: true },
      select: ['id', 'shortUrl', 'originalUrl', 'clickCount', 'updatedAt'],
    });

    urls.map(
      (i) =>
        (i.shortUrl = `${process.env.API_DOMAIN}:${process.env.APP_PORT}/${i.shortUrl}`),
    );
    return urls;
  }

  /**
   * @description Find a shortened URL by its original URL.
   * @param {string} originalUrl - The original URL.
   * @returns {Promise<ShortenedUrlsModel | undefined>} - The shortened URL details.
   */
  async findByOriginalUrl(originalUrl: string) {
    return await this._listShortenedUrlsRepository.findOne({
      where: { originalUrl },
    });
  }

  /**
   * @description Find a shortened URL by its original URL and userId.
   * @param {string} originalUrl - The original URL.
   * @param {number} userId - The user id.
   * @returns {Promise<ShortenedUrlsModel | undefined>} - The shortened URL details.
   */
  async findByOriginalUrlAndUserId(originalUrl: string, userId: number) {
    return await this._listShortenedUrlsRepository.findOne({
      where: { originalUrl, userId },
    });
  }

  /**
   * @description Redirect to the original URL and update click count.
   * @param {string} shortUrl - The shortened URL.
   * @returns {Promise<{ url: string }>} - The original URL.
   */
  async redirect(shortUrl: string): Promise<{ url: string }> {
    const url = await this._listShortenedUrlsRepository.findOneOrFail({
      where: { shortUrl },
    });

    await this._addClickShortenedUrlsService.addClickCount(url.id);

    return { url: url.originalUrl };
  }
}
