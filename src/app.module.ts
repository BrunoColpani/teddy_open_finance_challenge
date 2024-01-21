import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './Services/Users/users.module';
import { AuthModule } from './Services/Auth/auth.module';
import { ShortenedUrlsModule } from './Services/ShortenedUrls/shortened-urls.provider.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    UsersModule,
    AuthModule,
    ShortenedUrlsModule,
  ],
})
export class AppModule {}
