import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { BaseEntity } from './base.entity';

@Entity()
export class ProductSalesAnalysis extends BaseEntity {
  @PrimaryKey({ nullable: false })
  date!: Date;

  @PrimaryKey({ nullable: false })
  memberVendorId!: bigint;

  @PrimaryKey({ nullable: false })
  memberVendorStoreId!: bigint;

  @PrimaryKey({ nullable: false, length: 30 })
  mallProductId!: string;

  @Property({ nullable: true })
  exposeCount!: number;

  @Property({ nullable: true })
  clickCount!: number;

  @Property({ nullable: true })
  inflowCount!: number;

  @Property({ nullable: true })
  orderCount!: number;

  @Property({ nullable: true })
  adExposeCount!: number;

  @Property({ nullable: true })
  adClickCount!: number;

  @Property({ nullable: true })
  adDirectConversionCount!: number;

  @Property({ nullable: true })
  adIndirectConversionCount!: number;

  public getExposeCount(): number {
    return this.exposeCount == null ? 0 : this.exposeCount;
  }

  public getInflowCount(): number {
    return this.inflowCount == null ? 0 : this.inflowCount;
  }

  public getOrderCount(): number {
    return this.orderCount == null ? 0 : this.orderCount;
  }

  public getAdExposeCount(): number {
    return this.adExposeCount == null ? 0 : this.adExposeCount;
  }

  public getAdClickCount(): number {
    return this.adClickCount == null ? 0 : this.adClickCount;
  }

  public getAdDirectConversionCount(): number {
    return this.adDirectConversionCount == null
      ? 0
      : this.adDirectConversionCount;
  }

  public getAdIndirectConversionCount(): number {
    return this.adIndirectConversionCount == null
      ? 0
      : this.adIndirectConversionCount;
  }

  public static createOf(params: {
    memberVendorId: bigint;
    memberVendorStoreId: bigint;
    mallProductId: string;
    exposeCount?: number;
    clickCount?: number;
    inflowCount?: number;
    orderCount?: number;
    adExposeCount?: number;
    adClickCount?: number;
    adDirectConversionCount?: number;
    adIndirectConversionCount?: number;
    date: Date;
  }) {
    const productSalesAnalysis = new ProductSalesAnalysis();
    productSalesAnalysis.memberVendorId = params.memberVendorId;
    productSalesAnalysis.memberVendorStoreId = params.memberVendorStoreId;
    productSalesAnalysis.mallProductId = params.mallProductId;
    productSalesAnalysis.exposeCount = params.exposeCount;
    productSalesAnalysis.clickCount = params.clickCount;
    productSalesAnalysis.inflowCount = params.inflowCount;
    productSalesAnalysis.orderCount = params.orderCount;
    productSalesAnalysis.adExposeCount = params.adExposeCount;
    productSalesAnalysis.adClickCount = params.adClickCount;
    productSalesAnalysis.adDirectConversionCount =
      params.adDirectConversionCount;
    productSalesAnalysis.adIndirectConversionCount =
      params.adIndirectConversionCount;
    productSalesAnalysis.date = params.date;

    return productSalesAnalysis;
  }
}
