/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { deleteTodoByIdController } from '../controllers';

export function deleteTodoRoute(app: Router) {
	return (pathName: string) => {
		const todoRouter = Router();
		app.use(`${pathName}`, todoRouter);
		todoRouter.delete('/delete/:id', deleteTodoByIdController);
	};
}
