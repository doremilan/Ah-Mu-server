import { Injectable, OnModuleInit } from '@nestjs/common';
import { MikroORM, TableNotFoundException } from '@mikro-orm/core';
import { InjectMikroORM } from '@mikro-orm/nestjs';
import { ConfigService } from '@nestjs/config';
import { DatabaseSeeder } from './seeder/database.seeder';

@Injectable()
export class DataInitialization implements OnModuleInit {
  constructor(
    @InjectMikroORM('KURVE') private readonly orm: MikroORM,
    private readonly configService: ConfigService,
  ) {}
  async onModuleInit() {
    const isLocalMysqlMode =
      (process.env.DOMAIN_MYSQL_MODE == 'local' ||
        process.env.DOMAIN_MYSQL_MODE == 'test') &&
      process.env.DOMAIN_MYSQL_URL == 'localhost';

    if (!isLocalMysqlMode || process.env.DOMAIN_MYSQL_MODE == undefined) {
      return;
    }

    const mode = process.env.MODE || process.env.NODE_ENV || 'local';
    if (mode == 'local' || mode == 'test') {
      const seeder = this.orm.getSeeder();
      try {
        //운영에서만 prod_table 해당 테이블이 존재하고 로컬에서는 존재하지 않음
        await this.orm.getSchemaGenerator().execute('SELECT * FROM prod_table');
      } catch (ex) {
        if (ex instanceof TableNotFoundException) {
          await this.orm.getSchemaGenerator().refreshDatabase();
          await seeder.seed(DatabaseSeeder);
        }
      }
    }
  }
}
