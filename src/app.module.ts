import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './Services/Users/users.module';
import { AuthModule } from './Services/Auth/auth.module';
import { ShortenedUrlsModule } from './Services/ShortenedUrls/shortened-urls.provider.module';
import { UserMiddleware } from './common/middlewares/user.middleware';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '20m' },
    }),
    AuthModule,
    UsersModule,
    ShortenedUrlsModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddleware).forRoutes('*');
  }
}
