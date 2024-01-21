import { Inject, Injectable } from '@nestjs/common';
import { ShortenedUrlsModel } from 'src/Entities/ShortenedUrls/shortened-urls.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteShortenedUrlsService {
  constructor(
    @Inject('SHORTENEDURLS_REPOSITORY')
    private readonly _deleteShortenedUrlsRepository: Repository<ShortenedUrlsModel>,
  ) {}
  async remove(id: number, userId: number) {
    const url = await this._deleteShortenedUrlsRepository.findOneOrFail({
      where: { active: true, id, userId },
    });

    url.deletedAt = new Date();
    await this._deleteShortenedUrlsRepository.save(url);
  }
}
