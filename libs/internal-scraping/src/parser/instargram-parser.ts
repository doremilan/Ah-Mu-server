export interface InstargramScrapingData {
  agency: string;
  text: string;
  title: string;
  imageUrl: string;
}

export interface ImageData {
  height: number;
  url: string;
  width: number;
}

export enum AgencyEnum {
  EMK = 'EMK뮤지컬컴퍼니',
  CJ_ENM = 'CJ ENM MUSICAL 씨뮤',
  PHANTOM = '뮤지컬 오페라의 유령',
  SEENSEE = '신시컴퍼니',
}

export class InstargramParser {
  private readonly keywords = [
    '티켓오픈',
    '티켓 오픈',
    '티 켓 오 픈',
    '𝐓𝐈𝐂𝐊𝐄𝐓 𝐎𝐏𝐄𝐍',
  ];

  parse(params: any[]): InstargramScrapingData[] {
    const datas = params.map((data) => {
      const agency = data.caption.user.full_name;
      const text = data.caption.text;
      const imageList = data.image_versions2.candidates;

      const imageUrl = this.extractBiggestImage(imageList);
      const title = this.extractTitle(text);

      return { agency, text, title, imageUrl };
    });

    const targets = datas.filter((item) => {
      return this.keywords.some((keyword) => item.text.includes(keyword));
    });

    return targets;
  }

  private extractBiggestImage(imageList: ImageData[]): string {
    const sizes = imageList.map((image) => image.width).sort((a, b) => b - a);

    const biggestImage = imageList.find((image) => {
      return image.width === sizes[0] || image.height == sizes[0];
    });

    return biggestImage.url;
  }

  private extractTitle(text: string): string {
    const lines = text.split('\n');
    const title = lines[0];

    if (title.includes('⠀') || title.includes('#')) {
      return lines[1];
    }

    return title;
  }
}
