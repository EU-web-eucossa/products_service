import { ProductUseCasesType } from '../use-cases';
import { INext, IRequest, IResponse } from '@eucossa-web2-product-service-common/types';

type Props = {
	useCase: ProductUseCasesType
}

export function makeFindProductsController({ useCase }: Props) {
	return async (req: IRequest, res: IResponse, next: INext) => {
		try {
			const data = await useCase.listProductsUseCase();

			return res.status(200).json({ data });
		} catch (err) {
			return next(err);
		}
	};
}