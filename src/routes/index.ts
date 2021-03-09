import { Router } from 'express';
import productRoutes from './product.routes';
import sellerRoutes from './seller.routes';
import sessionRoutes from './session.routes';

const routes = Router();
routes.use('/sales', sellingRoutes);
routes.use('/seller', sellerRoutes);
routes.use('/product', productRoutes);
routes.use('/session', sessionRoutes);

export default routes;
