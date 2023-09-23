import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { OrmModule } from '@lib/domain-mysql/orm/orm.module';
import { EntityRepository } from '@mikro-orm/core';
import { getRepositoryToken } from '@mikro-orm/nestjs';
import { ConfigModule } from '@nestjs/config';
import { Member } from '@lib/domain-mysql/entity/member';
import { DomainMysqlModule } from '@lib/domain-mysql';
import { MusicalTicketingInfoService } from '@lib/domain-mysql/service/musical-ticketing-info.service';

jest.setTimeout(1000 * 60 * 60);

describe('테스트', () => {
  let app: INestApplication;
  let musicalTicketingInfoService;
  let memberRepository: EntityRepository<Member>;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: `${process.cwd()}/libs/domain-mysql/src/config/env/.default.env`,
        }),
        OrmModule.forRoot(true),
        DomainMysqlModule.register(),
      ],
      providers: [MusicalTicketingInfoService],
    }).compile();

    app = moduleFixture.createNestApplication();

    musicalTicketingInfoService = moduleFixture.get(
      MusicalTicketingInfoService,
    );

    memberRepository = moduleFixture.get(getRepositoryToken(Member, 'KURVE'));

    await app.init();
  });

  it('test', async () => {
    try {
      const result = await musicalTicketingInfoService.findProductInfo();
      console.log(result);
    } catch (ex) {
      console.log(ex);
    }
  });
});
