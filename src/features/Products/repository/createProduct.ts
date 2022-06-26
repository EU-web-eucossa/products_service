import { IProduct } from '../models/interfaces';
import { productModelType } from '../models';

export function createNewProduct({ model }: { model: productModelType }) {
	return async (productData: IProduct) => {
		const product = await model.create(productData);

		return product;
	};
}