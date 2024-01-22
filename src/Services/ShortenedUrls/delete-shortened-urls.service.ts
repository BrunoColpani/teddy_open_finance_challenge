import { Inject, Injectable } from '@nestjs/common';
import { ShortenedUrlsModel } from 'src/Entities/ShortenedUrls/shortened-urls.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteShortenedUrlsService {
  constructor(
    @Inject('SHORTENEDURLS_REPOSITORY')
    private readonly _deleteShortenedUrlsRepository: Repository<ShortenedUrlsModel>,
  ) {}

  /**
   * @description Remove a shortened URL by its ID and user ID.
   * @param {number} id - The ID of the shortened URL.
   * @param {number} userId - The ID of the user.
   */
  async remove(id: number, userId: number) {
    const url = await this._deleteShortenedUrlsRepository.findOneOrFail({
      where: { active: true, id, userId },
    });

    url.deletedAt = new Date();
    url.active = false;
    await this._deleteShortenedUrlsRepository.save(url);
  }
}
