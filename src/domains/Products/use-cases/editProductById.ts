/* eslint-disable camelcase */
import { IProduct } from '../models/interfaces';
import { ProductsError } from '@eucossa-web2-product-service-common/errors';
import createProduct from '../entities';
import productModel from '../models';
import { productRepositoryType } from '../repository';
import {validateMongoId} from '@eucossa-web2-product-service-helpers/validateMongoId';

export function makeEditProductByIdUseCase({
	repository,
}: {
	repository: productRepositoryType;
}) {
	return async (productId: string, productData: IProduct) => {
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
				message: 'Todo ID is invalid',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		const existingTodo = await (await repository.findProductById({
			model: productModel,
		}))(productId);
		if (!existingTodo) {
			throw new ProductsError({
				message: 'Product not found',
				status: 'warning',
				statusCode: 404,
				data: {},
			});
		}
		const { getDescription,
			getImage,
			getInStock,
			getName,
			getPrice,
			getSlugName,
			getTags,
			getQuantity, } = await createProduct({
			...existingTodo._doc,
			...productData,
		});
		const response = await (await repository.updateProductById({
			model: productModel,
		}))(productId, {
			description: getDescription(),
			image: getImage(),
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
