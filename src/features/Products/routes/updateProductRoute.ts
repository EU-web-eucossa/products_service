/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { updateProductByIdController } from '../controllers';

export function updateProductRoute(app: Router) {
	return (pathName: string) => {
		const productRouter = Router();
		app.use(`${pathName}`, productRouter);
		productRouter.put('/update/:id', updateProductByIdController);
	};
}
