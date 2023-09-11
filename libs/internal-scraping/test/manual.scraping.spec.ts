import { PageExecutor } from '@lib/internal-scraping/executor/page-executor';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { InternalScrapingModule } from '@lib/internal-scraping';
import { InstargramLoginPage } from '@lib/internal-scraping/scraping/login/login.page';
import { InstargramParser } from '@lib/internal-scraping/parser/instargram-parser';

jest.setTimeout(1000 * 60 * 60);

describe('Instargram scraping test', () => {
  let app: INestApplication;

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
    const executor = new PageExecutor(
      new InstargramLoginPage(),
      new InstargramParser(),
    );

    const res = await executor.execute();
  });
});
