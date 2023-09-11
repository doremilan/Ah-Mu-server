import { AnyEntity, EntityName } from '@mikro-orm/core';
import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import ormConfig from '../config/mikro-orm.config';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({})
export class OrmModule {
  static forRoot(allowGlobalContext = false): DynamicModule {
    return {
      global: true,
      module: OrmModule,
      imports: [
        MikroOrmModule.forRootAsync({
          inject: [ConfigService],
          contextName: ormConfig.contextName,
          useFactory: (configService: ConfigService) => {
            return {
              ...ormConfig,
              allowGlobalContext,
              registerRequestContext: false,
              dbName: configService.get('DOMAIN_MYSQL_DB'),
              port: +configService.get<number>('DOMAIN_MYSQL_PORT'),
              user: configService.get('DOMAIN_MYSQL_USER'),
              host: configService.get('DOMAIN_MYSQL_URL'),
              password: configService.get('DOMAIN_MYSQL_PASSWORD'),
              type: configService.get('DOMAIN_MYSQL_TYPE'),
            };
          },
        }),
        MikroOrmModule.forMiddleware(),
        MikroOrmModule.forFeature(
          {
            entities: [
              ...ormConfig.entities.map(
                (item) => item as EntityName<AnyEntity>,
              ),
            ],
          },
          'KURVE',
        ),
      ],
      exports: [MikroOrmModule],
      providers: [],
    };
  }
}
