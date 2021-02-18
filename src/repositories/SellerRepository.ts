import { EntityRepository, Repository } from 'typeorm';
import Sale from '../models/Sale';
import Seller from '../models/Seller';

@EntityRepository(Seller)
export default class SellerRepository extends Repository <Sale> {
  public async findByID(id: string): Promise<Seller | undefined> {
    const findSeller = this.findOne({
      where: { id },
    });
    return findSeller || null;
  }
}
