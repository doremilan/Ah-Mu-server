import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { BaseEntity } from './base.entity';

@Entity()
export class Member extends BaseEntity {
  @PrimaryKey()
  id!: bigint;

  @Property({ nullable: false })
  name!: string;

  @Property({ nullable: false })
  email!: string;

  @Property({ nullable: false })
  password!: string;

  @Property({ nullable: false })
  phoneNumber!: string;

  @Property({ nullable: true })
  salt!: string;

  @Property({ nullable: true })
  lastLoginAt: Date;

  static createOf(params: {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    salt?: string;
  }) {
    const member = new Member();
    member.email = params.email;
    member.name = params.name;
    member.password = params.password;
    member.phoneNumber = params.phoneNumber;
    member.salt = params.salt;

    return member;
  }
}
