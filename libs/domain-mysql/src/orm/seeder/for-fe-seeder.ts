import { Seeder } from '@mikro-orm/seeder';
import { EntityManager } from '@mikro-orm/core';
import { Member } from '@lib/domain-mysql/entity/member';

export class ForFeSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    const member2 = em.create(Member, {
      id: BigInt(2),
      name: '김용원',
      password:
        'aXbNUSyryWCMOssi9oVG3DFHvzrGKJzWzhJfUx/iseSlgZivaqibJfbQskipRP7AoLxxvY1BHIW5XLwYFjptXQ==',
      salt: 'OJtBwFHP+61pXFcy23h0zBgrzwA2GL/PO4syfCEPf1P9TP1EFQ8FM59PXRWXu1JAIjmZVgxe5E8oxLGIAugdyA==',
      email: 'yongwonkim@viralpick.co.kr',
      phoneNumber: '01022622191',
    });
    em.persist(member2);
  }
}
