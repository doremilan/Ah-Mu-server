export class InstargramScraping {
  public async doScraping(agencyName: string, cookies: string): Promise<any> {
    try {
      let res: any = [];

      if (agencyName == 'musicofthenightkr' || 'i_seensee') {
        res = await fetch(
          `https://www.instagram.com/api/v1/feed/user/${agencyName}/username/?count=20`,
          {
            headers: {
              accept: '*/*',
              'accept-language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
              dpr: '2',
              'sec-ch-prefers-color-scheme': 'light',
              'sec-ch-ua':
                '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
              'sec-ch-ua-full-version-list':
                '"Chromium";v="116.0.5845.110", "Not)A;Brand";v="24.0.0.0", "Google Chrome";v="116.0.5845.110"',
              'sec-ch-ua-mobile': '?0',
              'sec-ch-ua-platform': '"macOS"',
              'sec-ch-ua-platform-version': '"12.3.0"',
              'sec-fetch-dest': 'empty',
              'sec-fetch-mode': 'cors',
              'sec-fetch-site': 'same-origin',
              'viewport-width': '1512',
              'x-asbd-id': '129477',
              'x-csrftoken': 'lXiwQFbb1u2busAD2iEcH1afWLP3oNaA',
              'x-ig-app-id': '936619743392459',
              'x-ig-www-claim':
                'hmac.AR3-BBmF-aRATRvgivHZSbngJd0PqWUX8rncXekOIPx9_Gud',
              'x-requested-with': 'XMLHttpRequest',
              cookie: cookies,
              'Referrer-Policy': 'strict-origin-when-cross-origin',
            },
            method: 'GET',
          },
        );
      }

      res = await fetch(
        `https://www.instagram.com/api/v1/feed/user/${agencyName}/username/?count=20`,
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
            'Referrer-Policy': 'strict-origin-when-cross-origin',
          },
          method: 'GET',
        },
      );

      return await res.json();
    } catch (ex) {
      console.log(ex);
      throw new Error('공연오픈 리스트 요청에 실패했습니다.');
    }
  }
}
