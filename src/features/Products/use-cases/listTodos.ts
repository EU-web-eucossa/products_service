import { ExpressError } from '@eucossa-web2-product-service-common/errors/ExpressError';
import { TodoRepositoryType } from '../repository';
import studentModel from '@eucossa-web2-product-service-features/Products/models';

export function makeListTodosUseCase({
	repository,
}: {
	repository: TodoRepositoryType;
}) {
	return async () => {
		const response = await repository.findAllTodos({
			model: studentModel,
		})();
		if (response.length < 1) {
			throw new ExpressError({
				message: 'No todo found',
				status: 'warning',
				statusCode: 404,
				data: [],
			});
		}

		return response;
	};
}
