import { LoggerFactory } from '@lib/common/logger/logger.factory';
import { ProducerTypeEnum } from '@lib/common/type/types';
import { InstargramLoginPage } from '../scraping/login/login.page';
import { InstargramApiRequest } from '../requester/instagram-page-requester';

import { Executor } from './executor';
import { OdCompanyParser } from '../parser/instagram/od-company-parser';
import { PostScrapingData } from '../parser/interface/product-parser';

export class PageExecutor implements Executor<PostScrapingData> {
  private readonly logger = LoggerFactory.getInstance();
  private readonly producer: ProducerTypeEnum;
  private readonly instargramLoginpage: InstargramLoginPage;
  private readonly instargramApiRequest: InstargramApiRequest;
  private readonly odCompanyParser: OdCompanyParser;

  constructor(
    instargramLoginpage: InstargramLoginPage,
    instargramApiRequest: InstargramApiRequest,
    odCompanyParser: OdCompanyParser,
    producer: ProducerTypeEnum,
  ) {
    this.instargramLoginpage = instargramLoginpage;
    this.instargramApiRequest = instargramApiRequest;
    this.odCompanyParser = odCompanyParser;
    this.producer = producer;
  }

  public async execute(): Promise<PostScrapingData> {
    // const producers = [
    //   ProducerTypeEnum.OD_COMPANY,
    //   // ProducerTypeEnum.CJ_ENM,
    //   // ProducerTypeEnum.EMK_MUSICAL_COMPANY,
    //   // ProducerTypeEnum.MUSIC_OF_THE_NIGHT,
    //   // ProducerTypeEnum.ORCHARD_MUSICAL,
    //   // ProducerTypeEnum.SEENSEE_COMPANY,
    //   // ProducerTypeEnum.SHOW_NOTE,
    // ];
    try {
      // const cookies = await this.instargramLoginpage.login();
      const cookies = 'cookies';
      const scrapingData = await this.instargramApiRequest.doScraping(
        this.producer,
        cookies,
      );

      const result = this.odCompanyParser.parse({
        data: JSON.stringify(scrapingData),
      });
      console.log(result);
      return result;
    } catch (ex) {
      this.logger.error(ex);
    }
  }
}
