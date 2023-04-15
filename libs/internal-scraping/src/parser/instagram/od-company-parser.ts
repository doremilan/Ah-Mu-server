import { TypeChecker } from '@lib/common/utils/type-checker';
import { PostParser, PostScrapingData } from '../interface/product-parser';

export class OdCompanyParser implements PostParser<PostScrapingData> {
  parse(params: { data: string }): PostScrapingData {
    const postData = JSON.parse(params.data);

    const ticketPost: any[] = postData?.items || [];
    if (TypeChecker.isNull(ticketPost)) {
      throw new Error('데이터가 없어 처리할 수 없습니다.');
    }

    const ticketOpenData = ticketPost.filter((item) =>
      item.caption.text.includes('𝐓𝐈𝐂𝐊𝐄𝐓 𝐎𝐏𝐄𝐍'),
    );

    //created_at_utc: 1680324679
    const postList = ticketOpenData.map((item) => {
      const { text, created_at_utc } = item.caption;
      const imageList = item.image_versions2?.candidates || [];

      const post = {
        registrationAt: created_at_utc,
        comment: text,
        imageList: JSON.stringify(imageList),
      };

      return post;
    });

    return PostScrapingData.createOf(
      {
        producer: postData.user.full_name,
        userName: postData.user.username,
        userId: postData.user.pk_id,
      },
      postList,
    );
  }
}
