/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { findProductByNameController } from '../controllers';

export function findProductByNameRoute(app: Router) {
	return (pathName: string) => {
		const productRouter = Router();
		app.use(`${pathName}`, productRouter);
		productRouter.get('/find/:name', findProductByNameController);
	};
}
