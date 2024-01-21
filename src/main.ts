import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { ModelNotFoundException } from './common/filters/model-not-found.exception.filter';
import { HttpAllExceptionFilter } from './common/filters/http-all-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
  await app.listen(process.env.APP_PORT || 8080);
}
bootstrap();
