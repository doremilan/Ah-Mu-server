import { DynamicModule, Module } from '@nestjs/common';
import { MusicalTicketingInfoService } from '@lib/domain-mysql/service/musical-ticketing-info.service';
import { DomainMysqlService } from '@lib/domain-mysql/domain-mysql.service';

@Module({})
export class DomainMysqlModule {
  static register(): DynamicModule {
    return {
      module: DomainMysqlModule,
      imports: [],
      providers: [DomainMysqlService, MusicalTicketingInfoService],
      exports: [DomainMysqlService, MusicalTicketingInfoService],
    };
  }
}
