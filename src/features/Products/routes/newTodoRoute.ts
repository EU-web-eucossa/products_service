/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { createTodoController } from '../controllers';

export function newTodoRoute(app: Router) {
	return (pathName: string) => {
		const todoRouter = Router();
		app.use(`${pathName}`, todoRouter);
		todoRouter.post('/new', createTodoController);
	};
}
