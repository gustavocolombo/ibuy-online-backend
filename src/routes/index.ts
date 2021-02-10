import { Router } from 'express';
import sellingRoutes from './selling.routes';

const routes = Router();
routes.use('/sales', sellingRoutes);

export default routes;
