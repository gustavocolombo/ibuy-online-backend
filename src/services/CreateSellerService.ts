import { getCustomRepository } from 'typeorm';
import Seller from '../models/Seller';
import SellerRepository from '../repositories/SellerRepository';

interface CreateSeller{
  name: string;
  login: string;
  password: number;
  telefone: string;
  email: string;
}

export default class CreateSellerService {
  public async execute({
    name, login, password, telefone, email,
  }: CreateSeller): Seller {
    const sellerRepository = getCustomRepository(SellerRepository);

    const checkIfSellerExists = sellerRepository.findOne({
      where: { email },
    });

    if (checkIfSellerExists) {
      throw new Error('this email is already used');
    }

    const createSeller = sellerRepository.create({
      name, login, password, telefone, email,
    });

    await sellerRepository.save(createSeller);

    return createSeller;
  }
}
