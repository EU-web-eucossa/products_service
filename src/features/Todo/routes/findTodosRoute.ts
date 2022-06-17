/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { findTodosController } from '../controllers';

export function findTodosRoute(app: Router) {
	return (pathName: string) => {
		const todoRouter = Router();
		app.use(`${pathName}`, todoRouter);
		todoRouter.get('/', findTodosController);
	};
}
