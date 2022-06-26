import { TodoUseCasesType } from '../use-cases';
import { INext, IRequest, IResponse } from '@eucossa-web2-product-service-common/types';

type Props = {
	useCase: TodoUseCasesType;
};

export function makeCreateTodoController({ useCase }: Props) {
	return async (req: IRequest, res: IResponse, next: INext) => {
		try {
		
			const data = await useCase.addNewTodoUseCase(req.body);

			return res.status(200).json({ data });
		} catch (err) {
			return next(err);
		}
	};
}
