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
  user: User
  token: string
}

export default class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const sellerRepository = getRepository(Seller);

    const findSeller = await sellerRepository.findOne({
      where: { email },
    });

    if (!findSeller) {
      throw new Error('The combination of email/password does not match');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('The combination of email/password does not match');
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return {
      user,
      token,
    };
  }
}
