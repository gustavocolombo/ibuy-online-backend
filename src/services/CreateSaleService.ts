// import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import Sale from '../models/Sale';
import SaleRepository from '../repositories/SaleRepository';

interface ISale{
  name: string;
  login: string;
  password: string;
  telefone: string;
  email: string;
}

export default class CreateSaleService {
  public async execute({
    name, login, password, telefone, email,
  }: ISale): Promise<Sale> {
    const saleRepository = getCustomRepository(SaleRepository);

    const sale = saleRepository.create({
      name, login, password, telefone, email,
    });

    await saleRepository.save(sale);

    return sale;
  }
}
