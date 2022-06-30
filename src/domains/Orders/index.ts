import { Router } from 'express';
import { placeOrderRoute } from './routes/placeOrderRoute';

export function loadOrdersDomain({ app }: { app: Router }) {
	const ordersRouter = Router();
	app.use('/orders/', ordersRouter);
	placeOrderRoute({ app: ordersRouter });
	
	return ordersRouter;
}
