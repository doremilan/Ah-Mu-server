// import { Module, NestModule } from '@nestjs/common';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { InternalScrapingService } from './internal-scraping.service';
// import { DomainMysqlModule } from '@lib/domain-mysql/domain-mysql.module';
// import { OrmModule } from '@lib/domain-mysql/orm/orm.module';

// @Module({
//   imports: [ConfigModule.forRoot({ isGlobal: true }), OrmModule.register()],
//   providers: [InternalScrapingService, ConfigService],
//   exports: [InternalScrapingService],
// })
// export class InternalScrapingModule {}

import { DynamicModule, Module } from '@nestjs/common';
import { OrmModule } from '@lib/domain-mysql/orm/orm.module';
import { InternalScrapingService } from './internal-scraping.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({})
export class InternalScrapingModule {
  static register(allowGlobalContext = false): DynamicModule {
    return {
      module: InternalScrapingModule,
      imports: [ConfigModule.forRoot({ isGlobal: true }), OrmModule],
      providers: [InternalScrapingService, ConfigService],
    };
  }
}
