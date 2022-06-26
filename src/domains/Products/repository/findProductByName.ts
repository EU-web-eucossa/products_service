import { productModelType } from '../models';

export async function findProductByName({ model }: { model: productModelType }) {
	return async (name: string) => {
		const product = await model.findOne({ name });

		return product;
	};
}
