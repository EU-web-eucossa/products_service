import { ExpressError } from '@eucossa-web2-product-service-common/errors/ExpressError';
import { TodoRepositoryType } from '../repository';
import todoModel from '@eucossa-web2-product-service-features/Todo/models';

export function makeListTodoByTitleUseCase({
	repository,
}: {
	repository: TodoRepositoryType;
}) {
	return async (title: string) => {
		if (!title) {
			throw new ExpressError({
				message: 'Title is required',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		

		const response = await repository.findTodoByTitle({
			model: todoModel,
		})(title);
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
