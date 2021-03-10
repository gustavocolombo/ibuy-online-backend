import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import Seller from '../models/Seller';
import authConfig from '../config/auth';

interface Request{
  email: string;
  password: string;
}

interface Response{
  seller: Seller;
  token: string;
}

export default class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const sellerRepository = getRepository(Seller);

    const seller = await sellerRepository.findOne({
      where: { email },
    });

    if (!seller) {
      throw new Error('The combination of email/password does not match');
    }

    const passwordMatched = await compare(password, seller.password);

    if (!passwordMatched) {
      throw new Error('The combination of email/password does not match');
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: seller.id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return {
      seller,
      token,
    };
  }
}
