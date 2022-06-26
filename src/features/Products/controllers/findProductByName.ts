import { ProductUseCasesType } from '../use-cases';
import { INext, IRequest, IResponse } from '@eucossa-web2-product-service-common/types';

type Props = {
	useCase: ProductUseCasesType;
};

export function makeFindProductByNameController({ useCase }: Props) {
	return async (req: IRequest, res: IResponse, next: INext) => {
		try {
			const response = await useCase.listProductByNameUseCase(
				req.query.email as string,
			);

			return res.status(200).json({ data: response });
		} catch (err) {
			return next(err);
		}
	};
}
