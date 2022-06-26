import { ProductUseCasesType } from '../use-cases';
import { INext, IReq, IRes } from '@eucossa-web2-product-service-common/requests';

type Props = {
	useCase: ProductUseCasesType;
};

export function makeDeleteProductByIdController({ useCase }: Props) {
	return async (req: IReq, res: IRes, next: INext) => {
		try {
			const response = await useCase.removeProductByIdUseCase(
				req.params.id,
			);

			return res.status(200).json({ data: response });
		} catch (err) {
			return next(err);
		}
	};
}
