import { TypeMapper } from '@eucossa-web2-product-service-common/utils';
import { makeCreateTodoController } from './createTodo';
import { makeDeleteTodoByIdController } from './deleteTodoById';
import { makeFindTodoByTitleController } from './findTodoByTitle';
import { makeFindTodoByIdController } from './findTodoById';
import { makeFindTodosController } from './findTodos';
import { makeUpdateTodoByIdController } from './updateTodoById';
import useCase from '../use-cases';

const createTodoController = makeCreateTodoController({
	useCase,
});
const deleteTodoByIdController = makeDeleteTodoByIdController({
	useCase,
});
const findTodoByTitleController = makeFindTodoByTitleController({
	useCase,
});
const findTodoByIdController = makeFindTodoByIdController({
	useCase,
});

const findTodosController = makeFindTodosController({
	useCase,
});
const updateTodoByIdController = makeUpdateTodoByIdController({
	useCase,
});

export {
	createTodoController,
	deleteTodoByIdController,
	findTodoByTitleController,
	findTodoByIdController,
	findTodosController,
	updateTodoByIdController,
};

const TodoController = Object.freeze({
	createTodoController,
	deleteTodoByIdController,
	findTodoByTitleController,
	findTodoByIdController,
	findTodosController,
	updateTodoByIdController,
});

type controllerType = typeof TodoController;

export default TodoController;

export type TodoControllerType =
	TypeMapper<controllerType>[keyof controllerType];
