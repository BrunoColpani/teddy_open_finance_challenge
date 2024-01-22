import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        database: configService.get<string>('DATABASE_NAME'),
        schema: configService.get<string>('DATABASE_SCHEMA'),
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        entities: [__dirname + '/../**/*.entity.js'],
        synchronize: true, // Do not leave this field as true in a production environment
      });

      return dataSource.initialize();
    },
    inject: [ConfigService],
  },
];
