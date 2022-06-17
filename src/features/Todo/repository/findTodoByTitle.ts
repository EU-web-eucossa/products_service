import { TodoModelType } from '../models';

export function findTodoByTitle({ model }: { model: TodoModelType }) {
	return async (title: string) => {
		const todo = await model.findOne({ title });

		return todo;
	};
}
