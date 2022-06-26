/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { findProductsController } from '../controllers';

export function findProductsRoute({ app }: { app: Router }) {
	const productRouter = Router();
	app.use(productRouter);
	productRouter.get('/', findProductsController);
}
