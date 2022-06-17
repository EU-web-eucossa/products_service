import { ITodo } from '../models/interfaces';
import { TodoModelType } from '../models';

export function createNewTodo({ model }: { model: TodoModelType }) {
	return async (todoData: ITodo) => {
		const todo = await model.create(todoData);

		return todo;
	};
}