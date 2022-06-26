/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { createProductController } from '../controllers';
import  uploader  from '@eucossa-web2-product-service-uploader';

export function newProductRoute({ app }: { app: Router }) {
	const productRouter = Router();
	app.use(productRouter);
	productRouter.post(
		'/',
		uploader.single('image'),
		createProductController,
	);
}
