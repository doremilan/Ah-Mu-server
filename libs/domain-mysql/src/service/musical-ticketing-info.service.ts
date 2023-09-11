import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/mysql';
import { MusicalTicketingInfo } from '../entity/musical-ticketing-info';
import { ProductSalesAnalysis } from '../entity/product-sales-analysis';

@Injectable()
export class MusicalTicketingInfoService {
  constructor(
    @InjectRepository(ProductSalesAnalysis)
    private readonly productSalesAnalysisInfoRepository: EntityRepository<ProductSalesAnalysis>,
  ) {}

  async findProductInfo(): Promise<ProductSalesAnalysis> {
    const result = await this.productSalesAnalysisInfoRepository.findAll();

    console.log(result);

    return;
  }
}
