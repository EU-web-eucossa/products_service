import { Router } from 'express';
import { deleteProductRoute } from './routes/deleteProductRoute';
import { findProductByIdRoute } from './routes/findProductByIdRoute';
import { findProductByNameRoute } from './routes/findProductByNameRoute';
import { findProductsRoute } from './routes/findProductsRoute';
import { newProductRoute } from './routes/newProductRoute';
import { updateProductRoute } from './routes/updateProductRoute';

export default ({ app, pathName }: { app: Router; pathName: string }) => {
	newProductRoute(app)(pathName);
	findProductByNameRoute(app)(pathName);
	findProductByIdRoute(app)(pathName);
	findProductsRoute(app)(pathName);
	updateProductRoute(app)(pathName);
	deleteProductRoute(app)(pathName);
};
