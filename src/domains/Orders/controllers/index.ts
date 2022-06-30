import { TypeMapper } from '@eucossa-web2-product-service-common/mapper';
import { makeCreateOrderController } from './placeOrder';
import useCase from '../use-cases';

const createOrder = makeCreateOrderController({
	useCase,
});

export {
	createOrder,
};

const orderController = Object.freeze({
	createOrder,

});

type controllerType = typeof orderController;

export default orderController;

export type OrderControllerType =
	TypeMapper<controllerType>[keyof controllerType];
