/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { findProductByIdController } from '../controllers';

export function findProductByIdRoute(app: Router) {
	return (pathName: string) => {
		const productRouter = Router();
		app.use(`${pathName}`, productRouter);
		productRouter.get('/product/:id', findProductByIdController);
	};
}
