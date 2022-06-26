/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProduct } from '../models/interfaces';
import { ProductsError } from '@eucossa-web2-product-service-common/errors';

export function makeCreateProductEntity() {
	return async ({
		description,
		image,
		inStock,
		name,
		price,
		quantity,
		slug_name,
		tags,
	}: IProduct) => {
		/**
		 * Validate your inputs here before returning the entity
		 */
		if (!name) {
			throw new ProductsError({
				message: 'Product name required',
				data: {},
				status: 'warning',
				statusCode: 400,
			});
		}
		if (!price) {
			throw new ProductsError({
				message: 'Product price required',
				data: {},
				status: 'warning',
				statusCode: 400,
			});
		}
		if (!quantity) {
			throw new ProductsError({
				message: 'Product quantity required',
				data: {},
				status: 'warning',
				statusCode: 400,
			});
		}
		if (quantity < 1) {
			throw new ProductsError({
				message: 'Product quantity cannot be less than 1',
				data: {},
				status: 'warning',
				statusCode: 400,
			});
		}
		slug_name = slugify(name);

		return Object.freeze({
			getName: () => name,
			getPrice: () => price,
			getTags: () => tags,
			getInStock: () => inStock,
			getImage: () => image,
			getSlugName: () => slug_name,
			getDescription: () => description,
			getQuantity: () => quantity,
		});
	};
}

const slugify = (plainString: string) => {
	return plainString
		.toLowerCase()
		.replace(/ /g, '-')
		.replace(/[^\w-]+/g, '');
};
// Create a slugify function
