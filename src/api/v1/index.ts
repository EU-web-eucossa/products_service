import { Router } from 'express';
import { loadProductsDomain } from '@eucossa-web2-product-service-domains/Products';
import { loadTestDomain } from '@eucossa-web2-product-service-domains/testDomain';
import swagger from '@eucossa-web2-product-service-swagger';

export default () => {
	const router = Router();
	swagger({ app: router });
	loadTestDomain({ app: router });
	loadProductsDomain({ app: router });

	return router;
};
