/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ExpressError } from '@eucossa-web2-product-service-common/errors/ExpressError';
import { IProduct } from '../models/interfaces';

export function makeCreateProductEntity() {
	return async ({
		description,
		imageUrl,
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
			throw new ExpressError({
				message: 'Product name required',
				data: {},
				status: 'warning',
				statusCode: 400,
			});
		}
		if (!price) {
			throw new ExpressError({
				message: 'Product price required',
				data: {},
				status: 'warning',
				statusCode: 400,
			});
		}
		if (!quantity) {
			throw new ExpressError({
				message: 'Product quantity required',
				data: {},
				status: 'warning',
				statusCode: 400,
			});
		}
		if (quantity < 1) {
			throw new ExpressError({
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
			getImageUrl: () => imageUrl,
			getSlugName: () => slug_name,
			getDescription: () => description,
			getQuantity: () => quantity,
		});
	};
}

function slugify(cleanText: string) {
	// eslint-disable-next-line no-useless-escape
	const reg = new RegExp(/[(\s){1,}_/\\.,=;:#$~!#$%^&\(\)]/);

	return cleanText.replace(reg, '-');
}
