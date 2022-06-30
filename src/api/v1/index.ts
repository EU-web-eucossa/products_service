import { Router } from 'express';
import { loadOrdersDomain } from '@eucossa-web2-product-service-domains/Orders';
import { loadProductsDomain } from '@eucossa-web2-product-service-domains/Products';
import { loadTestDomain } from '@eucossa-web2-product-service-domains/testDomain';
import swagger from '@eucossa-web2-product-service-swagger';

export default () => {
	const router = Router();
	swagger({ app: router });
	loadTestDomain({ app: router });
	loadProductsDomain({ app: router });
	loadOrdersDomain({app:router});

	return router;
};
