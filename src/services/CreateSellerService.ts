import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import Seller from '../models/Seller';
import SellerRepository from '../repositories/SellerRepository';

interface CreateSeller{
  name: string;
  password: number;
  telefone: string;
  email: string;
}

export default class CreateSellerService {
  public async execute({
    name, password, telefone, email,
  }: CreateSeller): Promise<Seller> {
    const sellerRepository = getCustomRepository(SellerRepository);

    const checkIfSellerExists = await sellerRepository.findOne({
      where: { email },
    });

    if (checkIfSellerExists) {
      throw new Error('this email is already used');
    }

    const hashedPassword = await hash(password, 8);

    const createSeller = sellerRepository.create({
      name, password: hashedPassword, telefone, email,
    });

    await sellerRepository.save(createSeller);

    return createSeller;
  }
}
