import { PageExecutor } from '@lib/internal-scraping/executor/page-executor';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { InternalScrapingModule } from '@lib/internal-scraping';
import { InstargramLoginPage } from '@lib/internal-scraping/scraping/login/login.page';
import { InstargramParser } from '@lib/internal-scraping/parser/instargram-parser';
import { EntityRepository } from '@mikro-orm/mysql';
import { Member } from '@lib/domain-mysql/entity/member';
import { getRepositoryToken } from '@mikro-orm/nestjs';
import { DomainMysqlModule } from '@lib/domain-mysql';
import { OrmModule } from '@lib/domain-mysql/orm/orm.module';

jest.setTimeout(1000 * 60 * 60);

describe('Instargram scraping test', () => {
  let app: INestApplication;
  let memberRepository: EntityRepository<Member>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        InternalScrapingModule,
        DomainMysqlModule.register(),
      ],
      providers: [
        {
          provide: getRepositoryToken(Member, 'KURVE'),
          useValue: memberRepository,
        },
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    // memberRepository = moduleFixture.get(getRepositoryToken(Member, 'KURVE'));
  });

  it('로그인 테스트 브라우저 방식', async () => {
    const executor = new PageExecutor(
      new InstargramLoginPage(),
      new InstargramParser(),
    );

    const result = await memberRepository.findAll();
    console.log(result);

    const res = await executor.execute();
  });
});
