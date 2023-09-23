import { DynamicModule, Module, OnModuleInit } from '@nestjs/common';
import { InjectEntityManager, MikroOrmModule } from '@mikro-orm/nestjs';
import mikroOrmConfig from '../config/mikro-orm.config';
import { AnyEntity, EntityManager, EntityName } from '@mikro-orm/core';
import {
  DiscoveryModule,
  DiscoveryService,
  MetadataScanner,
  Reflector,
} from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { BaseEntity } from '../entity/base.entity';
import { DataInitialization } from './data-Initialization';

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
export class OrmModule implements OnModuleInit {
  constructor(
    private readonly discovery: DiscoveryService,
    private readonly scanner: MetadataScanner,
    @InjectEntityManager('KURVE')
    private readonly entityManager: EntityManager,
    private readonly reflector: Reflector,
  ) {}

  static forRoot(allowGlobalContext = false): DynamicModule {
    return {
      module: OrmModule,
      global: true,
      imports: [
        DiscoveryModule,
        MikroOrmModule.forRootAsync({
          inject: [ConfigService],
          contextName: mikroOrmConfig.contextName,
          useFactory: (configService: ConfigService) => {
            return {
              ...mikroOrmConfig,
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
              ...mikroOrmConfig.entities
                .filter((item) => item != BaseEntity)
                .map((item) => item as EntityName<AnyEntity>),
            ],
          },
          'KURVE',
        ),
      ],
      exports: [MikroOrmModule, DataInitialization],
      providers: [DataInitialization],
    };
  }

  onModuleInit(): any {
    this.registerAllTransactional();
  }

  registerAllTransactional() {
    this.discovery
      .getProviders()
      .filter((wrapper) => wrapper.isDependencyTreeStatic())
      .filter(({ instance }) => instance && Object.getPrototypeOf(instance))
      .forEach(({ instance }) => {
        this.scanner.scanFromPrototype(
          instance,
          Object.getPrototypeOf(instance),

          this.registerTransactional(instance),
        );
      });
  }

  registerTransactional(instance: any): any {
    const { reflector, entityManager } = this;
    return async (methodName) => {
      const methodRef = instance[methodName];
      const metadata = reflector.get('TransactionalOption', methodRef);
      if (metadata == null) {
        return;
      }

      const originMethod = (...args: unknown[]) =>
        methodRef.call(instance, ...args);

      instance[methodName] = async (...args: unknown[]) => {
        const em = entityManager.fork();

        let result: any;
        await em.transactional(async (em) => {
          result = await originMethod(...args);
        });

        return result;
      };

      return;
    };
  }
}

// export class OrmModuleOptions {
//   dbName?: string;
//   port?: number;
//   user?: string;
//   host?: string;
//   password?: string;
//   type:
//     | 'mongo'
//     | 'mysql'
//     | 'mariadb'
//     | 'postgresql'
//     | 'sqlite'
//     | 'better-sqlite';
// }
// @Module({})
// export class OrmModule {
//   constructor(
//     private readonly discovery: DiscoveryService,
//     private readonly scanner: MetadataScanner,
//     @InjectEntityManager('AHMU')
//     private readonly entityManager: EntityManager,
//     private readonly reflector: Reflector,
//   ) {}

//   static forRoot(allowGlobalContext = false): DynamicModule {
//     return {
//       module: OrmModule,
//       imports: [
//         ConfigModule.forRoot({
//           isGlobal: true,
//           envFilePath: `${process.cwd()}/libs/domain-mysql/src/config/env/.default.env`,
//         }),
//         MikroOrmModule.forRoot({
//           ...mikroOrmConfig,
//           ...({
//             allowGlobalContext,
//             dbName: process.env.DOMAIN_MYSQL_DB,
//             port: +process.env.DOMAIN_MYSQL_PORT,
//             user: process.env.DOMAIN_MYSQL_USER,
//             host: process.env.DOMAIN_MYSQL_URL,
//             password: process.env.DOMAIN_MYSQL_PASSWORD,
//             type: process.env.DOMAIN_MYSQL_TYPE,
//           } as OrmModuleOptions),
//         }),
//         MikroOrmModule.forFeature({
//           entities: [ProductSalesAnalysis],
//         }),
//       ],
//       exports: [MikroOrmModule],
//       providers: [ProductSalesAnalysis],
//     };
//   }
// }
