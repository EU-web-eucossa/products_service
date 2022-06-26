/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { deleteProductByIdController } from '../controllers';

export function deleteProductRoute({ app }: { app: Router }) {
	const productRouter = Router();
	app.use(productRouter);
	productRouter.delete('/delete/:id', deleteProductByIdController);
}
