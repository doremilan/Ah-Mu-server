import { Test, TestingModule } from '@nestjs/testing';
import { InternalScrapingService } from './internal-scraping.service';

describe('InternalScrapingService', () => {
  let service: InternalScrapingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InternalScrapingService],
    }).compile();

    service = module.get<InternalScrapingService>(InternalScrapingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
