/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { deleteProductByIdController } from '../controllers';

export function deleteProductRoute(app: Router) {
	return (pathName: string) => {
		const productRouter = Router();
		app.use(`${pathName}`, productRouter);
		productRouter.delete('/delete/:id', deleteProductByIdController);
	};
}
