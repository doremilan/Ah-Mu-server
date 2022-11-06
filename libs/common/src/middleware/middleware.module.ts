import { Module } from '@nestjs/common';
import { LoggerMiddleware } from '@lib/common/middleware/logger-middleware';

@Module({
  imports: [],
  providers: [LoggerMiddleware],
  exports: [],
})
export class MiddlewareModule {}
