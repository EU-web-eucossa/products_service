/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { updateProductByIdController } from '../controllers';

export function updateProductRoute({ app }: { app: Router }) {
	const productRouter = Router();
	app.use(productRouter);
	productRouter.put('/update/:id', updateProductByIdController);
}
