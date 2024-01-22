import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const swagger = (app: NestExpressApplication): void => {
  const config = new DocumentBuilder()
    .setTitle('Rest API Shortened Urls')
    .setDescription('Example Rest API Shortened Urls')
    .setVersion('1.0.0')
    .addSecurity('Token', {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    })
    .addSecurityRequirements('Token')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
};
