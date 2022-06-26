import { ProductsError } from '@eucossa-web2-product-service-common/errors';
import { productRepositoryType } from '../repository';
import studentModel from '../models';

export function makeListProductsUseCase({
	repository,
}: {
	repository: productRepositoryType;
}) {
	return async () => {
		const response = await (
			await repository.findAllProducts({
				model: studentModel,
			})
		)();
		if (response.length < 1) {
			throw new ProductsError({
				message: 'No product found',
				status: 'warning',
				statusCode: 404,
				data: [],
			});
		}

		return response;
	};
}
