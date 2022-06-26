/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
import { IMedia } from '../interfaces';
import { IProduct } from '../models/interfaces';
import { IReq } from '@eucossa-web2-product-service-common/requests';
import { ProductsError } from '@eucossa-web2-product-service-common/errors';
import { baseLogger } from '@eucossa-web2-product-service-logger';
import createProductEntity from '../entities';
import productModel from '../models';
import { productRepositoryType } from '../repository';
import streamUploader from '@eucossa-web2-product-service-uploadSdk/streamUploader';

export function makeAddNewProductUseCase({
	repository,
}: {
	repository: productRepositoryType;
}) {
	return async (productData: IProduct, req: IReq) => {
		if (!req.file) {
			throw new ProductsError({
				message: 'Image is required',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		const {
			getDescription,
			getImage,
			getInStock,
			getName,
			getPrice,
			getSlugName,
			getTags,
			getQuantity,
		} = await createProductEntity(productData);
		const existing = await (
			await repository.findProductByName({
				model: productModel,
			})
		)(getName());
		if (existing) {
			throw new ProductsError({
				message: 'Product with same name already exist',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		// Upload to cloudinary
		if (req.file) {
			try {
				const cloudResponse = <any>await streamUploader(req);
				const media: IMedia = {
					url: cloudResponse.secure_url,
					public_id: cloudResponse.public_id,
					version: cloudResponse.version,
					version_id: cloudResponse.version_id,
					asset_id: cloudResponse.asset_id,
				};

				const product = await (
					await repository.createNewProduct({
						model: productModel,
					})
				)({
					description: getDescription(),
					image: media,
					inStock: getInStock(),
					name: getName(),
					price: getPrice(),
					quantity: getQuantity(),
					tags: getTags(),
					slug_name: getSlugName(),
				});

				return product;
			} catch (error) {
				baseLogger.error(JSON.stringify(error));
				throw new Error(error);
			}
		}
		const saved = (
			await repository.createNewProduct({
				model: productModel,
			})
		)({
			description: getDescription(),
			image: getImage(),
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
