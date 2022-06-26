import { productModelType } from '../models';

export async function findAllProducts({ model }: { model: productModelType }) {
	return async () => {
		const products = await model.find({});

		return products;
	};
}
