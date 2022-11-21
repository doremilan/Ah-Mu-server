import { Emitter } from '@lib/common/emitter/emitter';
import { Browser } from '@lib/internal-scraping/puppeteer/browser';
import { Page } from 'puppeteer';
import puppeteer from 'puppeteer';
import { InstargramLogin } from './login';

export interface LoginParams {
  id: string;
  pw: string;
}

export class InstargramLoginPage {
  private readonly browser: Browser;
  private instargramLogin: InstargramLogin;
  // private readonly emitter: Emitter = new Emitter();

  public start = async () => {
    // this.emitter.emit('processing', '로그인 시작');

    // const page: Page = await this.browser.createBrowser();
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    const login: LoginParams = {
      id: process.env.ID,
      pw: process.env.PW,
    };

    this.instargramLogin = new InstargramLogin(page, login);

    try {
      const logged = await this.instargramLogin.isAlreadyLogged();

      if (!logged) {
        await this.instargramLogin.doLogin();
      }
    } catch (error) {
      throw error;
    }
  };
}
