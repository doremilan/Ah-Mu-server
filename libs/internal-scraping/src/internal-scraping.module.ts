import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { InternalScrapingService } from './internal-scraping.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/libs/internal-scraping/src/config/env/.default.env`,
    }),
  ],
  providers: [InternalScrapingService, ConfigService],
  exports: [InternalScrapingService],
})
export class InternalScrapingModule {}
