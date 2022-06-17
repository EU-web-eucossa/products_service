/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from '@eucossa-web2-product-service-db/mongodb';

export interface ITodo {
	title: string;
	done: boolean;
	time: string;
	body: string;
}

export interface ITodoDocument extends ITodo, mongoose.Document {
	_doc: any;
}

export interface ITodoDocumentModel
	extends mongoose.Model<ITodoDocument> {
	findByTitle: (title: string) => Promise<ITodoDocument>;
}
