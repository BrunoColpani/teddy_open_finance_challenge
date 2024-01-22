import { DataSource } from 'typeorm';
import { ShortenedUrlsModel } from './shortened-urls.entity';

export const shortenedUrlsProviders = [
  {
    provide: 'SHORTENEDURLS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ShortenedUrlsModel),
    inject: ['DATA_SOURCE'],
  },
];
