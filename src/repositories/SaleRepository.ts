import { EntityRepository, Repository } from 'typeorm';
import Sale from '../models/Sale';

@EntityRepository(Sale)
export default class SaleRepository extends Repository <Sale> {
  public async findForDate({ dateSale }: ISale): Promise<Sale | undefined > {
    // const findSale = this.sales.find((sale) => isEqual(dateSale, sale.dateSale));

    const findSale = await this.findOne({
      where: { dateSale },
    });

    return findSale || null;
  }
}
