/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { findProductsController } from '../controllers';

export function findProductsRoute(app: Router) {
	return (pathName: string) => {
		const productRouter = Router();
		app.use(`${pathName}`, productRouter);
		productRouter.get('/', findProductsController);
	};
}
