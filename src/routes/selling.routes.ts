import { Router } from 'express';
import { parseISO } from 'date-fns';
import SaleRepository from '../repositories/SaleRepository';
import CreateSaleService from '../services/CreateSaleService';

const sellingRoutes = Router();
const saleRepository = new SaleRepository();

sellingRoutes.get('/', (request, response) => {
  const findSaleForDate = saleRepository.findForDate({ dateSale });

  if (!findSaleForDate) {
    return response.status(400).json({ message: 'not sale found for this date' });
  }

  return response.json({ findSaleForDate });
});

sellingRoutes.post('/', (request, response) => {
  const { seller, product: { name, type, price }, dateSale } = request.body;

  const createSale = new CreateSaleService(saleRepository);

  const parsedDate = parseISO(dateSale);

  const sale = createSale.execute({ seller, product: { name, type, price }, dateSale: parsedDate });

  return response.json({ sale });
});

export default sellingRoutes;
