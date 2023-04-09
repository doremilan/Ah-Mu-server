import fetch from 'node-fetch';

export class InstargramApiRequest {
  public async doScraping(producer: string, cookies: string): Promise<any> {
    try {
      const res = await fetch(
        `https://www.instagram.com/api/v1/feed/user/${producer}/username/?count=${1}`,
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
      return await res.json();
    } catch (ex) {
      console.log(ex);
    }
  }
}

// fetch(
//   'https://www.instagram.com/api/v1/feed/user/cjenm.musical/username/?count=12',
//   {
//     headers: {
//       accept: '*/*',
//       'accept-language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
//       'sec-ch-prefers-color-scheme': 'light',
//       'sec-ch-ua':
//         '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
//       'sec-ch-ua-mobile': '?0',
//       'sec-ch-ua-platform': '"macOS"',
//       'sec-fetch-dest': 'empty',
//       'sec-fetch-mode': 'cors',
//       'sec-fetch-site': 'same-origin',
//       'viewport-width': '1470',
//       'x-asbd-id': '198387',
//       'x-csrftoken': 'tB9F80tydAqXYGRiVLfjf3LP48xVsSKx',
//       'x-ig-app-id': '936619743392459',
//       'x-ig-www-claim': 'hmac.AR3-BBmF-aRATRvgivHZSbngJd0PqWUX8rncXekOIPx9_EeL',
//       'x-requested-with': 'XMLHttpRequest',
//       cookie:
//         'dpr=2; ig_nrcb=1; mid=Y9YTiAAEAAGrrySvsCc8cmC2XdM5; ig_did=D05D1D54-905F-47E0-9DB4-0029B0DEBC24; csrftoken=tB9F80tydAqXYGRiVLfjf3LP48xVsSKx; ds_user_id=47347622548; sessionid=47347622548%3Ar0chGGv2A1rFiI%3A13%3AAYeudEfJtqgGMl_whKLVESAXcnet5GGgpz6QGuQKsw; shbid="8204\\05447347622548\\0541706510098:01f78fbbc377c934a2262c8624604ab37b5c833407999493bc25ac33fd14c9a3a45d20c0"; shbts="1674974098\\05447347622548\\0541706510098:01f7e3da18987077764eda74a2f31833db04d749e69ed13401b82c5f9d07aad5b329e261"; datr=liXWYwYw5e3gfjV_5rg3O1od; rur="NCG\\05447347622548\\0541706516515:01f73b1c7c075e469cdc47e95c060adb14039613fb580f713a56ecc354c93a275c69f4e0"',
//       Referer: 'https://www.instagram.com/cjenm.musical/',
//       'Referrer-Policy': 'strict-origin-when-cross-origin',
//     },
//     body: null,
//     method: 'GET',
//   },
// );
