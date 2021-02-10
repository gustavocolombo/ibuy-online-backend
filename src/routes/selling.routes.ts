import { Router } from 'express';
import Sale from '../models/Sale';

const sellingRoutes = Router();

interface ISell{
  seller: string;
  product:{
    name: string
    type: string
    price: number;
  },
  dateSale: Date;
}

const sales: ISell[] = [];

sellingRoutes.post('/', (request, response) => {
  const { seller, product: { name, type, price }, dateSale } = request.body;

  const sale = new Sale({ seller, product: { name, type, price }, dateSale });

  sales.push(sale);

  return response.json({ sale });
});

export default sellingRoutes;
