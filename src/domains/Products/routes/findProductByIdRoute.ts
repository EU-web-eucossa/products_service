/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { findProductByIdController } from '../controllers';

export function findProductByIdRoute({ app }: { app: Router }) {
	const productRouter = Router();
	app.use(productRouter);
	productRouter.get('/product/:id', findProductByIdController);
}
