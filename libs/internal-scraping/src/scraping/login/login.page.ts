import { Emitter } from '@lib/common/emitter/emitter';
import { Browser } from '@lib/internal-scraping/puppeteer/browser';
import { Page } from 'puppeteer';
import puppeteer from 'puppeteer';
import { InstargramLogin } from './login';
import { CookieHelper } from '@lib/common/cookie/cookie-helper';
import { InstargramScraping } from '../scraping/scraping';

export interface LoginParams {
  id: string;
  pw: string;
}

export class InstargramLoginPage {
  private instargramLogin: InstargramLogin;
  private instargramScraping: InstargramScraping;
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
      //TODO 에러 메시지 보내기 추가
      throw error;
    }

    const cookies = await this.instargramLogin.loadCookies();
    const requestCookie = CookieHelper.toRequestCookieFromPuppeteer(cookies);

    this.instargramScraping = new InstargramScraping();

    const res = await this.instargramScraping.doScraping(requestCookie);
    return;
  };
}
