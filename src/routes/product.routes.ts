import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import ProductRepository from '../repositories/ProductRepository';
import CreateProductService from '../services/CreateProductService';

const productRoutes = Router();

productRoutes.get('/', (request, response) => {
  const sellerRepository = getCustomRepository(ProductRepository);
  const findProduct = sellerRepository.findByID(request.params.id);

  if (!findProduct) {
    return response.status(400).json({ message: 'not sale found for this date' });
  }

  return response.json({ findSaleForDate });
});

productRoutes.post('/', async (request, response) => {
  try {
    const {
      name, type, price,
    } = request.body;

    const createProduct = new CreateProductService();

    const product = await createProduct.execute({
      name, type, price,
    });

    return response.json(product);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default productRoutes;
