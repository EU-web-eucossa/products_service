import { ProductsError } from '@eucossa-web2-product-service-common/errors';
import productModel from '../models';
import { productRepositoryType } from '../repository';

export function makeListProductByNameUseCase({
	repository,
}: {
	repository: productRepositoryType;
}) {
	return async (name: string) => {
		if (!name) {
			throw new ProductsError({
				message: 'Product name is required',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}

		const response = await (
			await repository.findProductByName({
				model: productModel,
			})
		)(name);
		if (!response) {
			throw new ProductsError({
				message: 'Product not found',
				status: 'warning',
				statusCode: 404,
				data: {},
			});
		}

		return response;
	};
}
