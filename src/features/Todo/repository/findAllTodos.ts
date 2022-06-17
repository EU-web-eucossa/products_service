import { TodoModelType } from '@eucossa-web2-product-service-features/Todo/models';

export function findAllTodos({ model }: { model: TodoModelType }) {
	return async () => {
		const todos = await model.find({});

		return todos;
	};
}
