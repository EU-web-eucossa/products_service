/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { findTodoByIdController } from '../controllers';

export function findTodoByIdRoute(app: Router) {
	return (pathName: string) => {
		const todoRouter = Router();
		app.use(`${pathName}`, todoRouter);
		todoRouter.get('/Todo/:id', findTodoByIdController);
	};
}
