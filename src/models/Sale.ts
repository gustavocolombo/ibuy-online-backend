import { uuid } from 'uuidv4';

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

export default class Sale {
  id: string;

  seller: string;

  product:{
    name: string;
    type: string;
    price: number;
  }

  dateSale: Date;

  constructor({ seller, product: { name, type, price }, dateSale }: ISale) {
    this.id = uuid();
    this.seller = seller;
    this.product = { name, type, price };
    this.dateSale = dateSale;
  }
}
