import { uuid } from 'uuidv4';

interface ISale{
  id: string;

  seller: string;

  name: string;
  type: string;
  price: number;

  dateSale: Date;
}

export default class Sale {
  id: string;

  seller: string;

  name: string;

  type: string;

  price: number;

  dateSale: Date;

  constructor({
    seller, name, type, price, dateSale,
  }: ISale) {
    this.id = uuid();
    this.seller = seller;
    this.name = name;
    this.price = price;
    this.type = type;
    this.dateSale = dateSale;
  }
}
