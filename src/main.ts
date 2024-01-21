import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  ClassSerializerInterceptor,
  Logger,
  ValidationPipe,
} from '@nestjs/common';
import { ModelNotFoundException } from './common/filters/model-not-found.exception.filter';
import { HttpAllExceptionFilter } from './common/filters/http-all-exception.filter';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new Logger('Main');
  const app = await NestFactory.create(AppModule);

  const config = app.get<ConfigService>(ConfigService);
  const port = config.get<number>('APP_PORT');
  const appUrl = config.get<string>('API_DOMAIN');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalFilters(
    new ModelNotFoundException(),
    new HttpAllExceptionFilter(),
  );

  app.enableCors({
    allowedHeaders: '*',
    exposedHeaders: '*',
  });

  await app.listen(port, () =>
    logger.log(`[WEB] Server running at ${appUrl}:${port}`),
  );
}
bootstrap();
