import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import SaleRepository from '../repositories/SaleRepository';
import CreateSaleService from '../services/CreateSaleService';

const sellingRoutes = Router();

sellingRoutes.get('/', (request, response) => {
  const saleRepository = getCustomRepository(SaleRepository);
  const findSaleForDate = saleRepository.findForDate({ dateSale });

  if (!findSaleForDate) {
    return response.status(400).json({ message: 'not sale found for this date' });
  }

  return response.json({ findSaleForDate });
});

sellingRoutes.post('/', async (request, response) => {
  try {
    const {
      seller, name, type, price, dateSale,
    } = request.body;

    const createSale = new CreateSaleService();

    const parsedDate = parseISO(dateSale);

    const sale = await createSale.execute({
      seller, name, type, price, dateSale: parsedDate,
    });

    return response.json(sale);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default sellingRoutes;
