import { EntityRepository, Repository } from 'typeorm';
import Product from '../models/Product';

@EntityRepository(Product)
export default class ProductRepository extends Repository<Product> {
  public async findByID(name: string): Promise<Product | undefined> {
    const findProduct = this.findOne({
      where: { name },
    });
    return findProduct || null;
  }
}
