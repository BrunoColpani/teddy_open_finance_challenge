import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ShortenedUrlsModel } from 'src/Entities/ShortenedUrls/shortened-urls.entity';
import { UpdateShortenedUrlsDto } from './dto/update-shortened-urls.dto';

@Injectable()
export class UpdatetShortenedUrlsService {
  constructor(
    @Inject('SHORTENEDURLS_REPOSITORY')
    private readonly _updateShortenedUrlsRepository: Repository<ShortenedUrlsModel>,
  ) {}
  async update(
    id: number,
    updateShortenedUrlsDto: UpdateShortenedUrlsDto,
    userId: number,
  ): Promise<ShortenedUrlsModel> {
    await this._updateShortenedUrlsRepository.findOneOrFail({
      where: { id, userId },
    });

    const updateBody = await this._updateShortenedUrlsRepository.preload({
      id,
      ...updateShortenedUrlsDto,
    });
    return await this._updateShortenedUrlsRepository.save(updateBody);
  }
}
