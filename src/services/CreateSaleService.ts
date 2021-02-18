// import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import Sale from '../models/Sale';
import SaleRepository from '../repositories/SaleRepository';

interface ISale{
  seller: string;
  name: string;
  price: number;
  // dateSale: Date;
}

export default class CreateSaleService {
  public async execute({
    name, type, price, dateSale,
  }: ISale): Promise<Sale> {
    const saleRepository = getCustomRepository(SaleRepository);

    // const saleDate = startOfHour(dateSale);

    const sale = saleRepository.create({
      seller,
      product,
    });

    await saleRepository.save(sale);

    return sale;
  }
}
