/* eslint-disable @typescript-eslint/no-explicit-any */
import { IMedia } from '../interfaces';
import mongoose from '@eucossa-web2-product-service-db/mongodb';

export interface IProduct {
	name: string;
	inStock: boolean;
	image: IMedia;
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
