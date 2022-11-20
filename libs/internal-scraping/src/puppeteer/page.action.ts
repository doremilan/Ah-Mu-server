import { Page } from 'puppeteer';
import { Protocol } from 'devtools-protocol';
import { LoggerFactory } from '@lib/common/logger/logger.factory';
import { Logger } from '@nestjs/common';

interface WaitingForType {
  visible?: boolean;
  hidden?: boolean;
  timeout?: number;
}

export class PageAction {
  public readonly logger: Logger = LoggerFactory.getInstance();
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  protected updatePage(page: Page) {
    this.page = page;
  }

  protected async click(tag: string) {
    try {
      await this.page.click(tag);
    } catch (ex) {
      this.logger.error(ex);
    }
  }

  protected async randomWait() {
    const time = Math.floor(Math.random() * 50);
    await this.page.waitForTimeout(time);
  }

  protected async inputKeyword(tag: string, keyword: string) {
    for (let i = 0; i < keyword.length; i++) {
      await this.page.type(tag, keyword[i], { delay: 100 });
      await this.randomWait();
    }
  }

  protected async clearInput(tag: string, length: number) {
    await this.page.focus(tag);
    for (let i = 0; i < length; i++) {
      await this.page.keyboard.press('Backspace');
    }
  }

  protected async setInput(tag: string, value: string) {
    await this.page.$eval(tag, (el: any) => (el.value = value));
  }

  protected async clickTarget(tag: string, targetTexts: string[]) {
    const tags = await this.page.$$(tag);
    for (let i = 0; i < tags.length; i++) {
      const textName = await this.page.evaluate(
        (el: any) => el.textContent,
        tags[i],
      );

      if (
        textName != null &&
        textName != '' &&
        targetTexts.includes(textName.trim())
      ) {
        await tags[i].click();
        break;
      }
    }
  }

  protected async findTagByTextIn(tag: string, targetTexts: string[]) {
    const elements = await this.page.$$(tag);
    for (let i = 0; i < elements.length; i++) {
      const textName = await this.page.evaluate(
        (el: any) => el.textContent,
        elements[i],
      );

      if (textName != null && targetTexts.includes(textName.trim())) {
        return elements[i];
      }
    }

    return null;
  }

  //TODO findTagByTextIn 중복 코드가 많이 있음 통합 필요
  protected async findTagByTextSomeIn(tag: string, targetTexts: string[]) {
    const elements = await this.page.$$(tag);
    for (let i = 0; i < elements.length; i++) {
      const textName = await this.page.evaluate(
        (el: any) => el.textContent,
        elements[i],
      );

      if (textName != null && targetTexts.includes(textName.trim())) {
        return elements[i];
      }

      for (let j = 0; j < targetTexts.length; j++) {
        if (targetTexts[i].indexOf(textName)) {
          return elements[i];
        }
      }
    }

    return null;
  }

  protected async mouseClick(tag: string) {
    const element = await this.page.$(tag);
    if (element == null) {
      return;
    }

    await this.mouseClickAction(element);
  }

  protected async mouseClickAttribute(
    tag: string,
    attr: string,
    target: string,
  ) {
    const elements = await this.page.$$(tag);
    for (let i = 0; i < elements.length; i++) {
      const text = await this.page.evaluate((el: any) => {
        return el.getAttribute('aria-label');
      }, elements[i]);

      if (text && text.indexOf(target) >= 0) {
        await this.mouseClickAction(elements[i]);
        break;
      }
    }
  }

  protected async screenshotMemory(): Promise<void> {
    await this.page.screenshot({ type: 'jpeg', fullPage: true });
  }

  protected async mouseClickAction(element: any) {
    const box = await element.boundingBox();
    const x = box.x + box.width / 2;
    const y = box.y + box.height / 2;

    await this.page.mouse.move(x, y);
    await this.page.mouse.down();
    // await Timer.sleep(1000);
    await this.page.mouse.up();
  }

  protected async waitForSelector(
    tag: string,
    prams: WaitingForType = { timeout: 3000 },
  ) {
    try {
      await this.page.waitForSelector(tag, prams);
    } catch (ex) {
      this.logger.error(ex);
    }
  }

  protected async waitForSelectorWithError(
    tag: string,
    prams: WaitingForType = { timeout: 3000 },
  ) {
    await this.page.waitForSelector(tag, prams);
  }

  protected async hasSelector(
    tag: string,
    params: WaitingForType = { timeout: 3000 },
  ): Promise<boolean> {
    try {
      await this.page.waitForSelector(tag, params);
    } catch (ex) {
      return false;
    }

    return true;
  }

  protected async goto(url: string) {
    await this.page.goto(url, { waitUntil: 'networkidle2' });
  }

  protected async evaluate(tag: string, x: (el: any) => void) {
    try {
      await this.page.$eval(tag, x);
    } catch (ex) {
      this.logger.error(ex);
    }
  }

  protected async evaluateElement(element: any, x: (el: any) => void) {
    await this.page.evaluate(x, element);
  }

  protected async getElementText(element: any): Promise<string> {
    return await this.page.evaluate((el: any) => el.textContent, element);
  }

  protected async getElementValue(element: any): Promise<string> {
    return await this.page.evaluate((el: any) => el.value, element);
  }

  protected async findElement(tag: string): Promise<any> {
    try {
      return await this.page.$(tag);
    } catch (ex) {
      this.logger.error(ex);
    }
  }

  protected async findElements(tag: string): Promise<any[]> {
    return await this.page.$$(tag);
  }

  protected async getCookies(): Promise<any[]> {
    return await this.page.cookies();
  }

  protected async setCookies(
    cookies: Protocol.Network.Cookie[],
  ): Promise<void> {
    return await this.page.setCookie(...cookies);
  }

  protected async select(tag: string, value: string) {
    try {
      await this.page.select(tag, value);
    } catch (ex) {
      this.logger.error(ex);
    }
  }

  protected async setRequestInterception(state: boolean) {
    await this.page.setRequestInterception(state);
  }

  protected async selectOption(tag: string, values: string) {
    await this.page.select(tag, values);
  }

  protected async findTextByTag(elements: any) {
    try {
      const text = await (
        await elements.getProperty('textContent')
      ).jsonValue();
      return text;
    } catch (ex) {
      this.logger.error(ex);
    }
  }

  protected async selectOptionByText(tag: string, text: string) {
    await this.page.evaluate(
      (tag, text) => {
        const elm = document.querySelector(tag);
        const options = elm.querySelectorAll('option');
        const selectedOption = [...options].find(
          (option) => option.text.trim() === text,
        );

        if (selectedOption) {
          selectedOption.selected = true;
        }
      },
      tag,
      text,
    );
  }

  protected async getLocalStorage(key: string) {
    return await this.page.evaluate((key: string) => {
      return window.localStorage.getItem(key);
    }, key);
  }
}
