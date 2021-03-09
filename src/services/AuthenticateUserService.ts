import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import Seller from '../models/Seller';

interface Request{
  email: string;
  password: string;
}

interface Response{
  user: User;
}

export default class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const sellerRepository = getRepository(Seller);

    const findSeller = await sellerRepository.findOne({
      where: { email },
    });

    if (!findSeller) {
      throw new Error('Combination user/password does not match');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Combination user/password does not match');
    }

    return {
      user,
    };
  }
}
