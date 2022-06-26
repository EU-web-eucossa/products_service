/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from '@eucossa-web2-product-service-db/mongodb';
import { IProductDocument, IProductDocumentModel } from './interfaces';

const productSchema: mongoose.Schema<IProductDocument> = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
			min: 0,
			max: Number.MAX_SAFE_INTEGER,
		},
		image: {
			type: {
				asset_id: String,
				public_id: String,
				version: String,
				version_id: String,
				url: String,
			},
			required: false,
			default: {
				asset_id: '',
				public_id: '',
				version: '',
				version_id: '',
				url: '',
			},
		},
		description: {
			type: String,
			required: true,
		},
		slug_name: {
			type: String,
			required: true,
			unique: true,
		}
	},
	{
		timestamps: true,
	},
);

productSchema.statics.findBySlugName = async function (slug: string) {
	// eslint-disable-next-line camelcase
	const todo = await this.findOne({ slug_name: slug });

	return todo;
};
const productModel = mongoose.model<IProductDocument, IProductDocumentModel>(
	'Products',
	productSchema,
);

export type productModelType = typeof productModel;

export default productModel;
