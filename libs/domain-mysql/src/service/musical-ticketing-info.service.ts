import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/mysql';
import { Member } from '@lib/domain-mysql/entity/member';

@Injectable()
export class MusicalTicketingInfoService {
  constructor(
    @InjectRepository(Member)
    private readonly memberRepository: EntityRepository<Member>,
  ) {}

  public async findProductInfo(): Promise<Member> {
    const result = await this.memberRepository.findAll();

    console.log(result);

    return;
  }
}
