import { Module } from '@nestjs/common';
import { MusicalTicketingInfoService } from './service/musical-ticketing-info.service';
import { DomainMysqlService } from './domain-mysql.service';

@Module({
  providers: [MusicalTicketingInfoService, DomainMysqlService],
  exports: [MusicalTicketingInfoService, DomainMysqlService],
})
export class DomainMysqlModule {}
