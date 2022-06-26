import { ExpressError } from '@eucossa-web2-product-service-common/errors/ExpressError';
import { ITodo } from '../models/interfaces';
import { TodoRepositoryType } from '../repository';
import createTodoEntity from '../entities';
import TodoModel from '@eucossa-web2-product-service-features/Products/models';

export function makeAddNewTodoUseCase({
	repository,
}: {
	repository: TodoRepositoryType;
}) {
	return async (TodoData: ITodo) => {
		const {
			getBody,
			getTitle,
			getDone,
			getTime,
		} = await createTodoEntity(TodoData);
		const existing = await repository.findTodoByTitle({model:TodoModel})(getTitle());
		if (existing) {
			throw new ExpressError({
				message: 'Todo title already exist',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		const saved = await repository.createNewTodo({
			model: TodoModel,
		})({
			title: getTitle(),
			body: getBody(),
			done: getDone(),
			time: getTime(),
		});

		return saved;
	};
}
