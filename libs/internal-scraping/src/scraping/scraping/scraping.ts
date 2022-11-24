export class InstargramScraping {
  public async doScraping(cookies: string): Promise<any> {
    try {
      const res = await fetch(
        'https://www.instagram.com/api/v1/feed/user/od_musical/username/?count=12',
        {
          headers: {
            accept: '*/*',
            'accept-language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
            'sec-ch-prefers-color-scheme': 'light',
            'sec-ch-ua':
              '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'viewport-width': '1512',
            'x-asbd-id': '198387',
            'x-csrftoken': '2BIhm5lJKncZLnj6Ij5NSg6DdEbqmZS2',
            'x-ig-app-id': '936619743392459',
            'x-ig-www-claim':
              'hmac.AR3-BBmF-aRATRvgivHZSbngJd0PqWUX8rncXekOIPx9_Ggu',
            'x-instagram-ajax': '1006637181',
            'x-requested-with': 'XMLHttpRequest',
            cookie: cookies,
            Referer: 'https://www.instagram.com/od_musical/',
            'Referrer-Policy': 'strict-origin-when-cross-origin',
          },
          body: null,
          method: 'GET',
        },
      );
      console.log(await res.json());
      return res;
    } catch (ex) {
      console.log(ex);
    }
  }
}
