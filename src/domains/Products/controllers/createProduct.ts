import { ProductUseCasesType } from '../use-cases';
import { ProductsError } from '@eucossa-web2-product-service-common/errors';
import {
	INext,
	IReq,
	IRes,
} from '@eucossa-web2-product-service-common/requests';

type Props = {
	useCase: ProductUseCasesType;
};

export function makeCreateProductController({ useCase }: Props) {
	return async (req: IReq, res: IRes, next: INext) => {
		try {
			if (!req.file) {
				throw new ProductsError({
					message: 'Product image required',
					status: 'warning',
					statusCode: 400,
					data: {},
				});
			}
			
			const data = await useCase.addNewProductUseCase(req.body,req);

			return res.status(200).json({ data });
		} catch (err) {
			return next(err);
		}
	};
}
