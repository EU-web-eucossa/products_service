import { ExpressError } from '@eucossa-web2-product-service-common/errors/ExpressError';
import productModel from '../models';
import { productRepositoryType } from '../repository';
import validateMongodbId from '@eucossa-web2-product-service-utils/mongo/ObjectId-validator';

export function makeRemoveProductByIdUseCase({
	repository,
}: {
	repository: productRepositoryType;
}) {
	return async (todoId: string) => {
		if (!todoId) {
			throw new ExpressError({
				message: 'Product ID is required',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		if (!validateMongodbId(todoId)) {
			throw new ExpressError({
				message: 'Product ID is invalid',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		const response = await repository.deleteProduct({
			model: productModel,
		})(todoId);

		return response;
	};
}
