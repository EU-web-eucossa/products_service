/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { findTodoByTitleController } from '../controllers';

export function findTodoByEmailRoute(app: Router) {
	return (pathName: string) => {
		const todoRouter = Router();
		app.use(`${pathName}`, todoRouter);
		todoRouter.get('/title/find', findTodoByTitleController);
	};
}
