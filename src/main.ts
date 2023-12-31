import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomExceptionFilter } from './common/filter/customExceptionFilter';
import { ValidationPipe } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';

async function bootstrap() {
  // // for https, local
  // const httpsOptions = {
  //   key: readFileSync(join(__dirname, '..', 'ssl', 'localhost-key.pem')),
  //   cert: readFileSync(join(__dirname, '..', 'ssl', 'localhost.pem')),
  // };
  // const app = await NestFactory.create(AppModule, { httpsOptions });

  // for http, local yarn generate and server
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new CustomExceptionFilter());
  await app.listen(3000);
}
bootstrap();
