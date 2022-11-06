import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { LoggerFactory } from '@lib/common/logger/logger.factory';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = LoggerFactory.getInstance();

  use(request: Request, response: Response, next: NextFunction): void {
    const { ip, method, originalUrl } = request;
    const userAgent = request.get('user-agent') || '';

    response.on('finish', () => {
      const { statusCode } = response;
      const contentLength = response.get('content-length');
      this.logger.info(
        `${method} ${statusCode} -  ${originalUrl} - ${userAgent} - ${ip} - ${contentLength}`,
      );
    });

    next();
  }
}
