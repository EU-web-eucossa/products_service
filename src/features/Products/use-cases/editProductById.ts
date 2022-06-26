/* eslint-disable camelcase */
import { ExpressError } from '@eucossa-web2-product-service-common/errors/ExpressError';
import { IProduct } from '../models/interfaces';
import createProduct from '../entities';
import productModel from '../models';
import { productRepositoryType } from '../repository';
import validateMongodbId from '@eucossa-web2-product-service-utils/mongo/ObjectId-validator';

export function makeEditProductByIdUseCase({
	repository,
}: {
	repository: productRepositoryType;
}) {
	return async (productId: string, productData: IProduct) => {
		if (!productId) {
			throw new ExpressError({
				message: 'Product ID is required',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		if (!validateMongodbId(productId)) {
			throw new ExpressError({
				message: 'Todo ID is invalid',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		const existingTodo = await repository.findProductById({
			model: productModel,
		})(productId);
		if (!existingTodo) {
			throw new ExpressError({
				message: 'Product not found',
				status: 'warning',
				statusCode: 404,
				data: {},
			});
		}
		const { getDescription,
			getImageUrl,
			getInStock,
			getName,
			getPrice,
			getSlugName,
			getTags,
			getQuantity, } = await createProduct({
			...existingTodo._doc,
			...productData,
		});
		const response = await repository.updateProductById({
			model: productModel,
		})(productId, {
			description: getDescription(),
			imageUrl: getImageUrl(),
			inStock: getInStock(),
			name: getName(),
			price: getPrice(),
			quantity: getQuantity(),
			tags: getTags(),
			slug_name: getSlugName(),
		});

		return response;
	};
}
