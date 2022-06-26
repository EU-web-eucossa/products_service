import { ProductsError } from '@eucossa-web2-product-service-common/errors';
import productModel from '../models';
import { productRepositoryType } from '../repository';
import { validateMongoId } from '@eucossa-web2-product-service-helpers/validateMongoId';

export function makeRemoveProductByIdUseCase({
	repository,
}: {
	repository: productRepositoryType;
}) {
	return async (productId: string) => {
		if (!productId) {
			throw new ProductsError({
				message: 'Product ID is required',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		if (!validateMongoId(productId)) {
			throw new ProductsError({
				message: 'Product ID is invalid',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		const response = await (
			await repository.deleteProduct({
				model: productModel,
			})
		)(productId);

		return response;
	};
}
