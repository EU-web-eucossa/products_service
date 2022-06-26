/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { createProductController } from '../controllers';
// import { imageUpload } from '@eucossa-web2-product-service-uploader';

export function newProductRoute(app: Router) {
	return (pathName: string) => {
		const productRouter = Router();
		app.use(`${pathName}`, productRouter);
		productRouter.post('/', /* imageUpload.single('image') */createProductController);
	};
}
