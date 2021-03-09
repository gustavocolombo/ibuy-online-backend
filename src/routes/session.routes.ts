import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionRoutes = Router();

sessionRoutes.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    const responseAuth = authenticateUser.execute({
      email, password,
    });

    return response.json(responseAuth);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default sessionRoutes;
