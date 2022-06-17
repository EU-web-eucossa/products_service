import { ITodo } from '../models/interfaces';
import { TodoModelType } from '../models';

export function updateTodoById({ model }: { model: TodoModelType }) {
	return async (todoId: string, todoData: ITodo) => {
		const todo = await model.findByIdAndUpdate(todoId, todoData, {
			new: true,
		});

		return todo;
	};
}
