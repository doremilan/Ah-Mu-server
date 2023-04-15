import { CookieHelper } from '@lib/common/utils/cookie-helper';
import { Browser } from '@lib/internal-scraping/puppeteer/browser';
import puppeteer from 'puppeteer';
import { InstargramLogin } from './login';

export interface LoginParams {
  id: string;
  pw: string;
}

export class InstargramLoginPage {
  private readonly browser: Browser;
  private readonly id = process.env.ID;
  private readonly pw = process.env.PW;
  private instargramLogin: InstargramLogin;

  public login = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    const login: LoginParams = {
      id: this.id,
      pw: this.pw,
    };

    this.instargramLogin = new InstargramLogin(page, login);

    try {
      const logged = await this.instargramLogin.isAlreadyLogged();

      if (!logged) {
        await this.instargramLogin.doLogin();
      }
    } catch (error) {
      throw new Error('로그인 요청에 실패했습니다.');
    }

    const cookies = await this.instargramLogin.loadCookies();
    const requestCookie = CookieHelper.toRequestCookieFromPuppeteer(cookies);

    return requestCookie;
  };
}
