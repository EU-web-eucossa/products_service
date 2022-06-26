import { Router } from 'express';
import products from '@eucossa-web2-product-service-features/Products';
import testRoute from './testRoute';
import { swaggerServe, swaggerSetup } from '@eucossa-web2-product-service-utils/docs';

export default function () {
	const apiRoute = Router();
	apiRoute.get('/test', testRoute);
	products({ app: apiRoute, pathName: '/products' });
	apiRoute.use('/docs', swaggerServe, swaggerSetup);

	return apiRoute;
}