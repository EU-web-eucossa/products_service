import { ExpressError } from '@eucossa-web2-product-service-common/errors/ExpressError';
import { productRepositoryType } from '../repository';
import studentModel from '@eucossa-web2-product-service-features/Products/models';

export function makeListProductsUseCase({
	repository,
}: {
	repository: productRepositoryType;
}) {
	return async () => {
		const response = await repository.findAllProducts({
			model: studentModel,
		})();
		if (response.length < 1) {
			throw new ExpressError({
				message: 'No product found',
				status: 'warning',
				statusCode: 404,
				data: [],
			});
		}

		return response;
	};
}
