export interface ProducerMeta {
  producer: string;
  userName: string;
  userId: number;
}

export class PostScrapingData {
  private readonly _meta: ProducerMeta;
  private readonly _postList: TicketPost[];

  private constructor(meta: ProducerMeta, prostList: TicketPost[]) {
    this._meta = meta;
    this._postList = prostList;
  }

  static createOf(meta: ProducerMeta, prostList: TicketPost[]) {
    return new PostScrapingData(meta, prostList);
  }

  get meta(): ProducerMeta {
    return this._meta;
  }

  get prostList(): TicketPost[] {
    return this._postList;
  }
}

export interface TicketPost {
  registrationAt: number;
  comment: string;
  imageList: string;
}

export interface PostParser<T> {
  parse(params: { data: string }): T;
}
