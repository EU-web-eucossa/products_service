import { OrderCasesType } from '../use-cases';
import {
	INext,
	IReq,
	IRes,
} from '@eucossa-web2-product-service-common/requests';

type Props = {
	useCase: OrderCasesType;
};

export function makeCreateOrderController({ useCase }: Props) {
	return async (req: IReq, res: IRes, next: INext) => {
		try {
			const data = await useCase.addOrder(req.body);

			return res
				.status(200)
				.json({ message: 'Order places successfully', data });
		} catch (err) {
			return next(err);
		}
	};
}
