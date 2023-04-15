import { Protocol } from 'devtools-protocol';

export class CookieHelper {
  public static toRequestCookieFromPuppeteer(
    cookies: Protocol.Network.Cookie[],
  ): string {
    return cookies.map((cookie) => `${cookie.name}=${cookie.value}`).join('; ');
  }

  public static toRequestCookieFromStringJson(cookies: any): string {
    return JSON.parse(cookies)
      .map((cookie) => `${cookie.name}=${cookie.value}`)
      .join('; ');
  }
}
