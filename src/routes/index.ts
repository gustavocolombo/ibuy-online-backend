import { Router } from 'express';
import productRoutes from './product.routes';
import sellerRoutes from './seller.routes';
import sellingRoutes from './selling.routes';

const routes = Router();
// routes.use('/sales', sellingRoutes);
routes.use('/seller', sellerRoutes);
routes.use('/product', productRoutes);

export default routes;
