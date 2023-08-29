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
  private agencies: string[] = [
    'od_musical',
    'emk_musical',
    'cjenm.musical',
    'musicofthenightkr',
    'i_seensee',
  ];

  public start = async () => {
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
      throw new Error('로그인 실패');
    }

    const cookies = await this.instargramLogin.loadCookies();
    const requestCookie = CookieHelper.toRequestCookieFromPuppeteer(cookies);

    this.instargramScraping = new InstargramScraping();

    const results = await Promise.all(
      this.agencies.map(
        async (agency) =>
          await this.instargramScraping.doScraping(agency, requestCookie),
      ),
    );

    const datas = [];
    results.map((item) => {
      const data = item?.items;

      datas.push(...data);
    });
    return datas;
  };
}
