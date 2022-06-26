/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from '@eucossa-web2-product-service-db/mongodb';

export interface IProduct {
	name: string;
	inStock: boolean;
	imageUrl: any;
	tags: string;
	price: number;
	description: string;
	slug_name: string;
	quantity:number
}

export interface IProductDocument extends IProduct, mongoose.Document {
	_doc: any;
}

export interface IProductDocumentModel extends mongoose.Model<IProductDocument> {
	findBySlugName: (slug: string) => Promise<IProductDocument>;
}
