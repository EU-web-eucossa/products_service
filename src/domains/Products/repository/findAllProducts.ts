import { productModelType } from '@eucossa-web2-product-service-features/Products/models';

export async function findAllProducts({ model }: { model: productModelType }) {
	return async () => {
		const products = await model.find({});

		return products;
	};
}
