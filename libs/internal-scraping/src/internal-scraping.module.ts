import { Module } from '@nestjs/common';
import { InternalScrapingService } from './internal-scraping.service';

@Module({
  providers: [InternalScrapingService],
  exports: [InternalScrapingService],
})
export class InternalScrapingModule {}
