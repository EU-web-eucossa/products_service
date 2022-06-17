import { TodoModelType } from '../models';

export function deleteTodo({ model }: { model: TodoModelType }) {
	return async (studentId: string) => {
		const entity = await model.findByIdAndUpdate(
			studentId,
			{
				$set: {
					isDeleted: true,
				},
			},
			{ new: true },
		);

		return entity;
	};
}
