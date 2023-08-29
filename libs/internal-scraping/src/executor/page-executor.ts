import { LoggerFactory } from '@lib/common/logger/logger.factory';
import { InstargramLoginPage } from '../scraping/login/login.page';
import { Executor } from './executor';
import { InstargramParser } from '../parser/instargram-parser';

export class PageExecutor implements Executor<null> {
  private readonly logger = LoggerFactory.getInstance();
  private readonly instargramLoginpage: InstargramLoginPage;
  private readonly instargramParser: InstargramParser;

  constructor(
    instargramLoginpage: InstargramLoginPage,
    instargramParser: InstargramParser,
  ) {
    this.instargramLoginpage = instargramLoginpage;
    this.instargramParser = instargramParser;
  }

  public async execute(): Promise<null> {
    try {
      const musicalInfos = await this.instargramLoginpage.start();

      const results = this.instargramParser.parse(musicalInfos);

      return;
    } catch (ex) {
      console.log(ex);
      this.logger.info('공연정보 수집요청 실패');
      throw new Error('공연정보 수집요청에 실패했습니다.');
    }
  }

  public close(): Promise<null> {
    return null;
  }
}
