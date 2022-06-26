/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { updateTodoByIdController } from '../controllers';

export function updateTodoRoute(app: Router) {
	return (pathName: string) => {
		const todoRouter = Router();
		app.use(`${pathName}`, todoRouter);
		todoRouter.put('/update/:id', updateTodoByIdController);
	};
}
