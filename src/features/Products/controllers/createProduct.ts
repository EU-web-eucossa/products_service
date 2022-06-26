import { ExpressError } from '@eucossa-web2-product-service-common/errors/ExpressError';
import { ProductUseCasesType } from '../use-cases';
import { deleteFile } from '@eucossa-web2-product-service-utils/fileSystem';
import {
	INext,
	IRequest,
	IResponse,
} from '@eucossa-web2-product-service-common/types';

type Props = {
	useCase: ProductUseCasesType;
};

export function makeCreateProductController({ useCase }: Props) {
	return async (req: IRequest, res: IResponse, next: INext) => {
		try {
			console.log(req.body,req.headers);
			if (!req.file) {
				throw new ExpressError({
					message: 'Product image required',
					status: 'warning',
					statusCode: 400,
					data: {},
				});
			}
			req.body.imageUrl=req.file.filename;
			
			const data = await useCase.addNewProductUseCase(req.body);

			return res.status(200).json({ data });
		} catch (err) {
			return next(err);
		} finally {
			req.file && (await deleteFile(req.file?.path));
		}
	};
}
