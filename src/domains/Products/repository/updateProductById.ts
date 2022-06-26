import { IProduct } from '../models/interfaces';
import { productModelType } from '../models';

export async function updateProductById({ model }: { model: productModelType }) {
	return async (productId: string, productData: IProduct) => {
		const todo = await model.findByIdAndUpdate(productId, productData, {
			new: true,
		});

		return todo;
	};
}
