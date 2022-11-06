import { Controller, Get } from '@nestjs/common';
import { ScrapingDataApiService } from './scraping-data-api.service';

@Controller()
export class ScrapingDataApiController {
  constructor(private readonly scrapingDataApiService: ScrapingDataApiService) {}

  @Get()
  getHello(): string {
    return this.scrapingDataApiService.getHello();
  }
}
