/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { createOrder } from '../controllers';

export function placeOrderRoute({ app }: { app: Router }) {
	const orderRouter = Router();
	app.use(orderRouter);
	orderRouter.post(
		'/',createOrder,);
}
