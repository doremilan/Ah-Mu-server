import { DynamicModule, Module } from '@nestjs/common';
import { MusicalTicketingInfoService } from '@lib/domain-mysql/service/musical-ticketing-info.service';
import { DomainMysqlService } from '@lib/domain-mysql/domain-mysql.service';
import { OrmModule } from '@lib/domain-mysql/orm/orm.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [OrmModule],
  providers: [DomainMysqlService],
  exports: [DomainMysqlService],
})
export class DomainMysqlModule {
  static register(): DynamicModule {
    return {
      module: DomainMysqlModule,
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: `${process.cwd()}/libs/domain-mysql/src/config/env/.default.env`,
        }),
        OrmModule.register(),
      ],
      providers: [DomainMysqlService],
      exports: [DomainMysqlService],
    };
  }
}
