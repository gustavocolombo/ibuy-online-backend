import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import SellerRepository from '../repositories/SellerRepository';
import CreateSellerService from '../services/CreateSellerService';

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
  try {
    const {
      name, login, password, telefone, email,
    } = request.body;

    const createSeller = new CreateSellerService();

    const seller = await createSeller.execute({
      name, login, password, telefone, email,
    });

    return response.json(seller);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default sellerRoutes;

/*
falta relacionamentos nos models
*/
