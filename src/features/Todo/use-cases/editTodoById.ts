import { ExpressError } from '@eucossa-web2-product-service-common/errors/ExpressError';
import { ITodo } from '../models/interfaces';
import { TodoRepositoryType } from '../repository';
import createTodoEntity from '../entities';
import TodoModel from '@eucossa-web2-product-service-features/Todo/models';
import validateMongodbId from '@eucossa-web2-product-service-utils/mongo/ObjectId-validator';

export function makeEditTodoByIdUseCase({
	repository,
}: {
	repository: TodoRepositoryType;
}) {
	return async (todoId: string, todoData: ITodo) => {
		if (!todoId) {
			throw new ExpressError({
				message: 'Todo ID is required',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		if (!validateMongodbId(todoId)) {
			throw new ExpressError({
				message: 'Todo ID is invalid',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		const existingTodo = await repository.findTodoById({
			model: TodoModel,
		})(todoId);
		if (!existingTodo) {
			throw new ExpressError({
				message: 'Todo not found',
				status: 'warning',
				statusCode: 404,
				data: {},
			});
		}
		const { getBody, getTitle, getDone, getTime } = await createTodoEntity({
			...existingTodo._doc,
			...todoData,
		});
		const response = await repository.updateTodoById({
			model: TodoModel,
		})(todoId, {
			title: getTitle(),
			body: getBody(),
			done: getDone(),
			time: getTime(),
		});

		return response;
	};
}
