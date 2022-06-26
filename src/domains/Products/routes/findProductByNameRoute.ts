/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { findProductByNameController } from '../controllers';

export function findProductByNameRoute({ app }: { app: Router }) {
	const productRouter = Router();
	app.use(productRouter);
	productRouter.get('/find/:name', findProductByNameController);
}
