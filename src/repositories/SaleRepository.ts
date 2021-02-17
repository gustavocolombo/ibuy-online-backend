import { isEqual } from 'date-fns';
import Sale from '../models/Sale';

interface ISale{
  id: string;

  seller: string;

  name: string;
  type: string;
  price: number;

  dateSale: Date;
}

export default class SaleRepository {
  private sales : Sale[];

  constructor() {
    this.sales = [];
  }

  public create({
    seller, name, type, price, dateSale,
  }: ISale): Sale {
    const sale = new Sale({
      seller, name, type, price, dateSale,
    });

    // console.log(sale);

    this.sales.push(sale);

    return sale;
  }

  public findForDate({ dateSale }: ISale): Sale | undefined {
    const findSale = this.sales.find((sale) => isEqual(dateSale, sale.dateSale));

    return findSale || null;
  }
}
