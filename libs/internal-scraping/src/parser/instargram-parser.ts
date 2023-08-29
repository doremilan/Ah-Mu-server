export interface InstargramScrapingData {
  agency: string;
  text: string;
  imageUrl: string;
}

export interface ImageData {
  height: number;
  url: string;
  width: number;
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

      return { agency, text, imageUrl };
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
}
