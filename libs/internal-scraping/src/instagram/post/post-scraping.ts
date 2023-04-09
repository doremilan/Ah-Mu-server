import { ProducerTypeEnum } from '@lib/common/type/types';
import { FetchRequest } from '@lib/common/utils/fetch-requester';

export class InstagramPostScraping {
  private readonly baseUrl = 'https://www.instagram.com';
  private readonly fetchRequest: FetchRequest;

  async doScraping(producer: ProducerTypeEnum, cookie: string) {
    const url = `${
      this.baseUrl
    }/api/v1/feed/user/${producer}/username/?count=${1}`;

    return this.fetchInstagram(producer, cookie, url);
  }

  private async fetchInstagram(
    producer: ProducerTypeEnum,
    cookie: string,
    url: string,
  ) {
    switch (producer) {
      case ProducerTypeEnum.OD_COMPANY:
        return await this.fetchRequest.request({
          method: 'GET',
          url,
          cookie,
        });
      default:
        throw Error('처리할 수 없는 제작사 입니다. ' + producer);
    }
  }
}
