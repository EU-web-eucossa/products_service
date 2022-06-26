import { ExpressError } from '@eucossa-web2-product-service-common/errors/ExpressError';
import productModel from '../models';
import { productRepositoryType } from '../repository';
import validateMongodbId from '@eucossa-web2-product-service-utils/mongo/ObjectId-validator';

export function makeListProductByIdUseCase({
	repository,
}: {
	repository: productRepositoryType;
}) {
	return async (productId: string) => {
		if (!productId) {
			throw new ExpressError({
				message: 'Todo ID is required',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		if (!validateMongodbId(productId)) {
			throw new ExpressError({
				message: 'Product ID is invalid',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		const response = await repository.findProductById({
			model: productModel,
		})(productId);
		if (!response) {
			throw new ExpressError({
				message: 'Product not found',
				status: 'warning',
				statusCode: 404,
				data: {},
			});
		}

		return response;
	};
}
