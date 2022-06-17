import { Router } from 'express';
import { deleteTodoRoute } from './routes/deleteTodoRoute';
import { findTodoByEmailRoute } from './routes/findTodoByTitleRoute';
import { findTodoByIdRoute } from './routes/findTodoByIdRoute';
import { findTodosRoute } from './routes/findTodosRoute';
import { newTodoRoute } from './routes/newTodoRoute';
import { updateTodoRoute } from './routes/updateTodoRoute';

export default ({ app, pathName }: { app: Router; pathName: string }) => {
	newTodoRoute(app)(pathName);
	findTodoByEmailRoute(app)(pathName);
	findTodoByIdRoute(app)(pathName);
	findTodosRoute(app)(pathName);
	updateTodoRoute(app)(pathName);
	deleteTodoRoute(app)(pathName);
};
