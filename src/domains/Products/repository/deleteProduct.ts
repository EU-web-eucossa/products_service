import { productModelType } from '../models';

export async function deleteProduct({ model }: { model: productModelType }) {
	return async (productId: string) => {
		const entity = await model.findByIdAndUpdate(
			productId,
			{
				$set: {
					isDeleted: true,
				},
			},
			{ new: true },
		);

		return entity;
	};
}
