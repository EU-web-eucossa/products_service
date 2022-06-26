import { ProductUseCasesType } from '../use-cases';
import { INext, IReq, IRes } from '@eucossa-web2-product-service-common/requests';

type Props = {
	useCase: ProductUseCasesType
}

export function makeFindProductByIdController({ useCase }: Props) {
	return async (req: IReq, res: IRes, next: INext) => {
		try {
			const data = await useCase.listProductByIdUseCase(req.params.id);

			return res.status(200).json({ data });
		} catch (err) {
			return next(err);
		}
	};
}