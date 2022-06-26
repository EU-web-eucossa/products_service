import { productModelType } from '../models';

export async function findProductById({ model }: { model: productModelType }) {
	return async (productId: string) => {
		const product = await model.findById(productId);

		return product;
	};
}
