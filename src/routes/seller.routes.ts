import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import SellerRepository from '../repositories/SellerRepository';
import CreateSaleService from '../services/CreateSaleService';

const sellingRoutes = Router();

sellingRoutes.get('/', (request, response) => {
  const sellerRepository = getCustomRepository(SellerRepository);
  const findSeller = sellerRepository.findByID(request.params.id);

  if (!findSeller) {
    return response.status(400).json({ message: 'not sale found for this date' });
  }

  return response.json({ findSaleForDate });
});

sellingRoutes.post('/', async (request, response) => {
  const {
    seller, login, password, telefone, email,
  } = request.body;

  const createSale = new CreateSaleService();

  const sale = await createSale.execute({
    seller, login, password, telefone, email,
  });

  return response.json(sale);
});

export default sellingRoutes;
