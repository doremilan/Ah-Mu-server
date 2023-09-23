import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { ForFeSeeder } from '@lib/domain-mysql/orm/seeder/for-fe-seeder';

export class DatabaseSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    //TODO seed 파일 읽어서 자동으로 넣기
    return this.call(em, [ForFeSeeder]);
  }
}
