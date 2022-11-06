import { NestFactory } from '@nestjs/core';
import { ScrapingDataApiModule } from './scraping-data-api.module';

async function bootstrap() {
  const app = await NestFactory.create(ScrapingDataApiModule);
  await app.listen(3000);
}
bootstrap();
