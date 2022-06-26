import { Router } from 'express';
import { deleteProductRoute } from './routes/deleteProductRoute';
import { findProductByIdRoute } from './routes/findProductByIdRoute';
import { findProductByNameRoute } from './routes/findProductByNameRoute';
import { findProductsRoute } from './routes/findProductsRoute';
import { newProductRoute } from './routes/newProductRoute';
import { updateProductRoute } from './routes/updateProductRoute';

export function loadProductsDomain({ app }: { app: Router }) {
	const productsRouter = Router();
	app.use('/products/', productsRouter);
	newProductRoute({ app: productsRouter });
	findProductByNameRoute({ app: productsRouter });
	findProductByIdRoute({ app: productsRouter });
	findProductsRoute({ app: productsRouter });
	updateProductRoute({ app: productsRouter });
	deleteProductRoute({ app: productsRouter });
	
	return productsRouter;
}
