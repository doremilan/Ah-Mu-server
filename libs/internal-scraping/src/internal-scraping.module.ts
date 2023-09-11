import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { InternalScrapingService } from './internal-scraping.service';
import { DomainMysqlModule } from '@lib/domain-mysql/domain-mysql.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DomainMysqlModule],
  providers: [InternalScrapingService, ConfigService],
  exports: [InternalScrapingService],
})
export class InternalScrapingModule {}
