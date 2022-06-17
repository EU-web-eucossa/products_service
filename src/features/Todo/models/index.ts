/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from '@eucossa-web2-product-service-db/mongodb';
import { ITodoDocument, ITodoDocumentModel } from './interfaces';

const TodoSchema: mongoose.Schema<ITodoDocument> = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		body: {
			type: String,
			required: true,
		},
		done: {
			type: Boolean,
			default: false,
		},
		time: {
			type: String,
			required: true,
			
		},
	},
	{
		timestamps: true,
	},
);

TodoSchema.statics.findByTitle = async function (title: string) {
	const todo = await this.findOne({ title });

	return todo;
};
const TodoModel = mongoose.model<ITodoDocument, ITodoDocumentModel>(
	'Todos',
	TodoSchema,
);

export type TodoModelType = typeof TodoModel;

export default TodoModel;
