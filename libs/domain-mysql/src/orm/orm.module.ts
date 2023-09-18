import { AnyEntity, EntityName } from '@mikro-orm/core';
import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import ormConfig from '@lib/domain-mysql/config/mikro-orm.config';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ProductSalesAnalysis } from '../entity/product-sales-analysis';
import mikroOrmConfig from '@lib/domain-mysql/config/mikro-orm.config';

export class OrmModuleOptions {
  dbName?: string;
  port?: number;
  user?: string;
  host?: string;
  password?: string;
  type:
    | 'mongo'
    | 'mysql'
    | 'mariadb'
    | 'postgresql'
    | 'sqlite'
    | 'better-sqlite';
}
@Module({})
export class OrmModule {
  static register(allowGlobalContext = false): DynamicModule {
    return {
      module: OrmModule,
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: `${process.cwd()}/libs/domain-mysql/src/config/env/.default.env`,
        }),
        MikroOrmModule.forRoot({
          ...mikroOrmConfig,
          ...({
            allowGlobalContext,
            dbName: process.env.DOMAIN_MYSQL_DB,
            port: +process.env.DOMAIN_MYSQL_PORT,
            user: process.env.DOMAIN_MYSQL_USER,
            host: process.env.DOMAIN_MYSQL_URL,
            password: process.env.DOMAIN_MYSQL_PASSWORD,
            type: process.env.DOMAIN_MYSQL_TYPE,
          } as OrmModuleOptions),
        }),
        MikroOrmModule.forFeature({
          entities: [ProductSalesAnalysis],
        }),
      ],
      exports: [MikroOrmModule],
      providers: [],
    };
  }
}

// @Module({})
// export class OrmModule {
//   static forRoot(allowGlobalContext = false): DynamicModule {
//     return {
//       global: true,
//       module: OrmModule,
//       imports: [
//         MikroOrmModule.forRootAsync({
//           inject: [ConfigService],
//           contextName: ormConfig.contextName,
//           useFactory: (configService: ConfigService) => {
//             return {
//               ...ormConfig,
//               allowGlobalContext,
//               registerRequestContext: false,
//               dbName: configService.get('DOMAIN_MYSQL_DB'),
//               port: +configService.get<number>('DOMAIN_MYSQL_PORT'),
//               user: configService.get('DOMAIN_MYSQL_USER'),
//               host: configService.get('DOMAIN_MYSQL_URL'),
//               password: configService.get('DOMAIN_MYSQL_PASSWORD'),
//               type: configService.get('DOMAIN_MYSQL_TYPE'),
//             };
//           },
//         }),
//         MikroOrmModule.forMiddleware(),
//         MikroOrmModule.forFeature(
//           {
//             entities: [
//               ...ormConfig.entities.map(
//                 (item) => item as EntityName<AnyEntity>,
//               ),
//             ],
//           },
//           'KURVE',
//         ),
//       ],
//       exports: [MikroOrmModule],
//       providers: [],
//     };
//   }
// }
