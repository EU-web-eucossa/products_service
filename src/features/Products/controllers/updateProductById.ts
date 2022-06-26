import { ProductUseCasesType } from '../use-cases';
import { INext, IRequest, IResponse } from '@eucossa-web2-product-service-common/types';

type Props = {
	useCase: ProductUseCasesType;
};

export function makeUpdateProductByIdController({ useCase }: Props) {
	return async (req: IRequest, res: IResponse, next: INext) => {
		try {
			const response = await useCase.editProductByIdUseCase(
				req.params.id,
				req.body,
			);

			return res.status(200).json({ data: response });
		} catch (err) {
			return next(err);
		}
	};
}
