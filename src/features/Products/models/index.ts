/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from '@eucossa-web2-product-service-db/mongodb';
import { IProductDocument, IProductDocumentModel } from './interfaces';

const productSchema: mongoose.Schema<IProductDocument> = new mongoose.Schema(
	{
		
	},
	{
		timestamps: true,
	},
);

productSchema.statics.findBySlugName = async function (slug: string) {
	// eslint-disable-next-line camelcase
	const todo = await this.findOne({ slug_name:slug });

	return todo;
};
const productModel = mongoose.model<IProductDocument, IProductDocumentModel>(
	'Products',
	productSchema,
);

export type productModelType = typeof productModel;

export default productModel;
