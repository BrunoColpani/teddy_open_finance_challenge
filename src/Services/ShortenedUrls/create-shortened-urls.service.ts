import { Inject, Injectable } from '@nestjs/common';
import { CreateShortenedUrlsDto } from './dto/create-shortened-urls.dto';
import { ListShortenedUrlsService } from './list-shortened-urls.service';
import { Repository } from 'typeorm';
import { ShortenedUrlsModel } from 'src/Entities/ShortenedUrls/shortened-urls.entity';

@Injectable()
export class CreateShortenedUrlsService {
  constructor(
    @Inject('SHORTENEDURLS_REPOSITORY')
    private readonly _createShortenedUrlsRepository: Repository<ShortenedUrlsModel>,
    private readonly _listShortenedUrlsService: ListShortenedUrlsService,
  ) {}

  /**
   * @description Create a new shortened URL.
   * @param {CreateShortenedUrlsDto} createShortenedUrlsDto - DTO containing details for creating a shortened URL.
   * @param {number} userId - The ID of the user.
   * @returns {Promise<string>} - The shortened URL.
   */
  async create(createShortenedUrlsDto: CreateShortenedUrlsDto, userId: number) {
    const existingUrl = await this._listShortenedUrlsService.findByOriginalUrl(
      createShortenedUrlsDto.originalUrl,
    );

    if (existingUrl) {
      return `${process.env.API_DOMAIN}/shorten/${existingUrl.shortUrl}`;
    }

    const hash = this.generateRandomHash(6);

    const shortUrl = `${process.env.API_DOMAIN}/shorten/${hash}`;

    const newUrl = this._createShortenedUrlsRepository.create({
      originalUrl: createShortenedUrlsDto.originalUrl,
      shortUrl: hash,
      userId,
    });
    await this._createShortenedUrlsRepository.save(newUrl);

    return shortUrl;
  }

  /**
   * @description Generate a random hash of a specified length.
   * @param {number} length - The length of the hash.
   * @returns {string} - The generated hash.
   */
  generateRandomHash(length: number): string {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
  }
}