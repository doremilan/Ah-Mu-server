import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from '@lib/common/middleware/logger-middleware';
import { ScrapingDataApiController } from './scraping-data-api.controller';
import { ScrapingDataApiService } from './scraping-data-api.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [ScrapingDataApiController],
  providers: [ScrapingDataApiService],
})
export class ScrapingDataApiModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*'); //미들웨어는 consumer에 연결한다.
  }
}
