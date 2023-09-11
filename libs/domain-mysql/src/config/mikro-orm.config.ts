import { Logger } from '@nestjs/common';
import { Options } from '@mikro-orm/core';
import { MusicalTicketingInfo } from '../entity/musical-ticketing-info';
import { BaseEntity } from '../entity/base.entity';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { ProductSalesAnalysis } from '../entity/product-sales-analysis';

const logger = new Logger('MikroORM');
const ormConfig: Options = {
  entities: [BaseEntity, ProductSalesAnalysis, MusicalTicketingInfo],
  dbName: process.env.DOMAIN_MYSQL_DB,
  type: process.env.DOMAIN_MYSQL_TYPE as
    | 'mongo'
    | 'mysql'
    | 'mariadb'
    | 'postgresql'
    | 'sqlite'
    | 'better-sqlite',
  port: +process.env.DOMAIN_MYSQL_PORT,
  user: process.env.DOMAIN_MYSQL_USER,
  host: process.env.DOMAIN_MYSQL_URL,
  password: process.env.DOMAIN_MYSQL_PASSWORD,
  highlighter: new SqlHighlighter(),
  debug: true,
  logger: logger.log.bind(logger),
  schemaGenerator: {
    disableForeignKeys: true,
    createForeignKeyConstraints: false,
    ignoreSchema: [],
  },
  forceUtcTimezone: true,
  contextName: 'KURVE',
};

export default ormConfig;
