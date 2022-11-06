import { Injectable } from '@nestjs/common';

@Injectable()
export class ScrapingDataApiService {
  getHello(): string {
    return 'Hello World!';
  }
}
