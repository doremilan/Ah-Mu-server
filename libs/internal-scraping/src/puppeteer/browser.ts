import puppeteer from 'puppeteer';

export class Browser {
  public createBrowser = async () => {
    const browser = await puppeteer.launch();
    return await browser.newPage();
  };
}
