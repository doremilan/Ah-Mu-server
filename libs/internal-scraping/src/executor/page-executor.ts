import { LoggerFactory } from '@lib/common/logger/logger.factory';
import { ProducerTypeEnum } from '@lib/common/type/types';
import { InstargramLoginPage } from '../instagram/login/login.page';
import { InstagramPostScraping } from '../instagram/post/post-scraping';

import { Executor } from './executor';

export interface Processed {
  producer: string;
  data: any;
}

export class PageExecutor implements Executor<Processed[]> {
  private readonly logger = LoggerFactory.getInstance();
  private readonly instargramLoginpage: InstargramLoginPage;
  private readonly instagramPostScraping: InstagramPostScraping;

  constructor(
    instargramLoginpage: InstargramLoginPage,
    instagramPostScraping: InstagramPostScraping,
  ) {
    this.instargramLoginpage = instargramLoginpage;
    this.instagramPostScraping = instagramPostScraping;
  }

  public async execute(): Promise<Processed[]> {
    const producers = [
      ProducerTypeEnum.OD_COMPANY,
      // ProducerTypeEnum.CJ_ENM,
      // ProducerTypeEnum.EMK_MUSICAL_COMPANY,
      // ProducerTypeEnum.MUSIC_OF_THE_NIGHT,
      // ProducerTypeEnum.ORCHARD_MUSICAL,
      // ProducerTypeEnum.SEENSEE_COMPANY,
      // ProducerTypeEnum.SHOW_NOTE,
    ];
    try {
      const results = [];
      const cookies = await this.instargramLoginpage.start();

      for (const producer of producers) {
        const data = await this.instagramPostScraping.doScraping(
          producer,
          cookies,
        );

        const result = {
          producer,
          data,
        };
        results.push(result);
      }

      return results;
    } catch (ex) {
      this.logger.error(ex);
    }
  }
}
