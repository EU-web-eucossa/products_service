import { ExpressError } from '@eucossa-web2-product-service-common/errors/ExpressError';
import { TodoRepositoryType } from '../repository';
import todoModel from '@eucossa-web2-product-service-features/Products/models';
import validateMongodbId from '@eucossa-web2-product-service-utils/mongo/ObjectId-validator';

export function makeListTodoByIdUseCase({
	repository,
}: {
	repository: TodoRepositoryType;
}) {
	return async (todoId: string) => {
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
		const response = await repository.findTodoById({
			model: todoModel,
		})(todoId);
		if (!response) {
			throw new ExpressError({
				message: 'Todo not found',
				status: 'warning',
				statusCode: 404,
				data: {},
			});
		}

		return response;
	};
}
