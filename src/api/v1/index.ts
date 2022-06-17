import { Router } from 'express';
import testRoute from './testRoute';
import todosDomain from '@eucossa-web2-product-service-features/Todo';
import { swaggerServe, swaggerSetup } from '@eucossa-web2-product-service-utils/docs';

export default function () {
	const apiRoute = Router();
	apiRoute.get('/test', testRoute);
	apiRoute.use('/docs', swaggerServe, swaggerSetup);
	todosDomain({ app: apiRoute, pathName: '/todos' });

	return apiRoute;
}