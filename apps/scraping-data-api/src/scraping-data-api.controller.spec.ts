import { Test, TestingModule } from '@nestjs/testing';
import { ScrapingDataApiController } from './scraping-data-api.controller';
import { ScrapingDataApiService } from './scraping-data-api.service';

describe('ScrapingDataApiController', () => {
  let scrapingDataApiController: ScrapingDataApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ScrapingDataApiController],
      providers: [ScrapingDataApiService],
    }).compile();

    scrapingDataApiController = app.get<ScrapingDataApiController>(ScrapingDataApiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(scrapingDataApiController.getHello()).toBe('Hello World!');
    });
  });
});
