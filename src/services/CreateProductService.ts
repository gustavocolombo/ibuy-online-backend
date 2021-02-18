import { getCustomRepository } from 'typeorm';
import Product from '../models/Product';
import ProductRepository from '../repositories/ProductRepository';

interface CreateProduct{
  name: string;
  type: string;
  price: string;
}

export default class CreateProductService {
  public async execute({ name, type, price }: CreateProduct): Promise<Product> {
    const productRepository = getCustomRepository(ProductRepository);

    const createProduct = productRepository.create({
      name, type, price,
    });

    await productRepository.save(createProduct);

    return createProduct;
  }
}
