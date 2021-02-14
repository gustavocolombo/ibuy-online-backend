import { startOfHour } from 'date-fns';
import Sale from '../models/Sale';
import SaleRepository from '../repositories/SaleRepository';

interface ISale{
  id: string;

  seller: string;

  product:{
    name: string;
    type: string;
    price: number;
  }

  dateSale: Date;
}

export default class CreateSaleService {
  private saleRepository : SaleRepository;

  constructor(saleRepository: SaleRepository) {
    this.saleRepository = saleRepository;
  }

  public execute({ seller, product: { name, type, price }, dateSale }: ISale): Sale {
    const saleDate = startOfHour(dateSale);

    const sale = this.saleRepository.create({
      seller,
      product: { name, type, price },
      dateSale: saleDate,
    });

    return sale;
  }
}
