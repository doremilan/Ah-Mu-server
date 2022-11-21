import { LoggerFactory } from '@lib/common/logger/logger.factory';
import { InstargramLoginPage } from '../scraping/login/login.page';
import { Executor } from './executor';

export class PageExecutor implements Executor<null> {
  private readonly logger = LoggerFactory.getInstance();
  private readonly instargramLoginpage: InstargramLoginPage;

  constructor(instargramLoginpage: InstargramLoginPage) {
    this.instargramLoginpage = instargramLoginpage;
  }

  public async execute(): Promise<null> {
    try {
      await this.instargramLoginpage.start();
      return;
    } catch (ex) {
      console.log(ex);
    }
  }

  public close(): Promise<null> {
    return null;
  }
}
