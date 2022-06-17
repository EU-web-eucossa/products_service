import { TodoModelType } from '../models';

export function findTodoById({ model }: { model: TodoModelType }) {
	return async (todoId: string) => {
		const todo = await model.findById(todoId);

		return todo;
	};
}
