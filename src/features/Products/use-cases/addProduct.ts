/* eslint-disable camelcase */
import { ExpressError } from '@eucossa-web2-product-service-common/errors/ExpressError';
import { IProduct } from '../models/interfaces';
import { productRepositoryType } from '../repository';
// eslint-disable-next-line sort-imports
import { IRequest } from '@eucossa-web2-product-service-common/types';
import createProductEntity from '../entities';
import productModel from '../models';

export function makeAddNewProductUseCase({
	repository,
}: {
	repository: productRepositoryType;
}) {
	return async (productData: IProduct) => {
		
		const {
			getDescription,
			getImageUrl,
			getInStock,
			getName,
			getPrice,
			getSlugName,
			getTags,
			getQuantity,
		} = await createProductEntity(productData);
		const existing = await repository.findProductByName({
			model: productModel,
		})(getName());
		if (existing) {
			throw new ExpressError({
				message: 'Product with same name already exist',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		const saved = await repository.createNewProduct({
			model: productModel,
		})({
			description: getDescription(),
			imageUrl: getImageUrl(),
			inStock: getInStock(),
			name: getName(),
			price: getPrice(),
			quantity: getQuantity(),
			tags: getTags(),
			slug_name: getSlugName(),
		});

		return saved;
	};
}
