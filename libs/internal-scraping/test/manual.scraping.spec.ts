import { PageExecutor } from '@lib/internal-scraping/executor/page-executor';
import { INestApplication } from '@nestjs/common';
import { LoggerFactory } from '@lib/common/logger/logger.factory';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { InternalScrapingModule } from '@lib/internal-scraping';
import { InstargramLoginPage } from '@lib/internal-scraping/scraping/login/login.page';

jest.setTimeout(1000 * 60 * 60);

describe('Instargram scraping test', () => {
  let app: INestApplication;
  const logger = LoggerFactory.getInstance();

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        InternalScrapingModule,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('로그인 테스트 브라우저 방식', async () => {
    const executor = new PageExecutor(new InstargramLoginPage());
    const res = await executor.execute();
    console.log(res);
  });
});
