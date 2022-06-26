import { TypeMapper } from '@eucossa-web2-product-service-common/utils';
import adminRepository from '../repository';
import { makeAddNewTodoUseCase } from './addTodo';
import { makeEditTodoByIdUseCase } from './editTodoById';
import { makeListTodoByTitleUseCase } from './listTodoByTitle';
import { makeListTodoByIdUseCase } from './listTodoById';
import { makeListTodosUseCase } from './listTodos';
import { makeRemoveTodoByIdUseCase } from './removeTodo';

const addNewTodoUseCase = makeAddNewTodoUseCase({
	repository: adminRepository,
});
const listTodoByTitleUseCase = makeListTodoByTitleUseCase({
	repository: adminRepository,
});
const listTodoByIdUseCase = makeListTodoByIdUseCase({
	repository: adminRepository,
});
const listTodosUseCase = makeListTodosUseCase({
	repository: adminRepository,
});
const removeTodoByIdUseCase = makeRemoveTodoByIdUseCase({
	repository: adminRepository,
});
const editTodoByIdUseCase = makeEditTodoByIdUseCase({
	repository: adminRepository,
});

export {
	addNewTodoUseCase,
	listTodoByTitleUseCase,
	listTodoByIdUseCase,
	listTodosUseCase,
	removeTodoByIdUseCase,
	editTodoByIdUseCase,
};

const todoUseCases = Object.freeze({
	addNewTodoUseCase,
	listTodoByTitleUseCase,
	listTodoByIdUseCase,
	listTodosUseCase,
	removeTodoByIdUseCase,
	editTodoByIdUseCase,
});

type useCases = typeof todoUseCases;

export type TodoUseCasesType = TypeMapper<useCases>

export default todoUseCases;
