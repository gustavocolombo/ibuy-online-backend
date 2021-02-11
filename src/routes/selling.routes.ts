import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';
import SaleRepository from '../repositories/SaleRepository';

const sellingRoutes = Router();
const saleRepository = new SaleRepository();

sellingRoutes.get('/', (request, response) => {
  const findSaleForDate = saleRepository.findForDate({ dateSale });

  if (!findSaleForDate) {
    return response.json({ message: 'not sale found for this date' });
  }

  return response.json({ findSaleForDate });
});

sellingRoutes.post('/', (request, response) => {
  const { seller, product: { name, type, price }, dateSale } = request.body;

  const parsedDate = startOfHour(parseISO(dateSale));

  const sale = saleRepository.create({
    seller,
    product: { name, type, price },
    dateSale: parsedDate,
  });

  return response.json({ sale });
});

export default sellingRoutes;
