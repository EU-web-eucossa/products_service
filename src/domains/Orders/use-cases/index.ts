import { TypeMapper } from '@eucossa-web2-product-service-common/mapper';
import { makeAddOrder } from './addOrder';

const addOrder = makeAddOrder();

export { addOrder };

const orderUseCases = Object.freeze({
	addOrder,
});

type useCases = typeof orderUseCases;

export type OrderCasesType = TypeMapper<useCases>;

export default orderUseCases;
