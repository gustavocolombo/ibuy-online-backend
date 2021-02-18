import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import SellerRepository from '../repositories/SellerRepository';
import CreateSaleService from '../services/CreateSaleService';

const sellerRoutes = Router();

sellerRoutes.get('/', (request, response) => {
  const sellerRepository = getCustomRepository(SellerRepository);
  const findSeller = sellerRepository.findByID(request.params.id);

  if (!findSeller) {
    return response.status(400).json({ message: 'not sale found for this date' });
  }

  return response.json({ findSaleForDate });
});

sellerRoutes.post('/', async (request, response) => {
  const {
    seller, login, password, telefone, email,
  } = request.body;

  const createSeller = new CreateSaleService();

  const seller = await createSeller.execute({
    seller, login, password, telefone, email,
  });

  return response.json(seller);
});

export default sellerRoutes;
