import { Test, TestingModule } from '@nestjs/testing';
import { DomainMysqlService } from './domain-mysql.service';

describe('DomainMysqlService', () => {
  let service: DomainMysqlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DomainMysqlService],
    }).compile();

    service = module.get<DomainMysqlService>(DomainMysqlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
