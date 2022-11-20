import { PageAction } from '@lib/internal-scraping/puppeteer/page.action';
import { Page } from 'puppeteer';

export class InstargramLogin extends PageAction {
  private readonly mainUrl = 'https://www.instagram.com/';
  private readonly id: string;
  private readonly pw: string;

  constructor(page: Page, login: { id: string; pw: string }) {
    super(page);

    this.id = login.id;
    this.pw = login.pw;
  }

  public async isAlreadyLogged() {
    await this.page.goto(this.mainUrl, { waitUntil: 'domcontentloaded' });
    return await this.hasSelector('#f6f604ffd0eb0c');
  }

  public async doLogin() {
    await this.page.goto(this.mainUrl);
    await this.inputKeyword(
      '#loginForm > div > div:nth-child(1) > div > label > input',
      this.id,
    );
    await this.inputKeyword(
      '#loginForm > div > div:nth-child(2) > div > label > input',
      this.pw,
    );
    await this.click('#loginForm > div > div:nth-child(3)');
    await this.page.waitForNavigation({ waitUntil: 'networkidle2' });
    const isError = await this.findElement('#slfErrorAlert');
    if (isError) {
      throw new Error('ID,PW를 확인해주세요.');
    }
  }
}
