import { createNewTodo } from './createTodo';
import { deleteTodo } from './deleteTodo';
import { findAllTodos } from './findAllTodos';
import { findTodoByTitle } from './findTodoByTitle';
import { findTodoById } from './findTodoById';
import { updateTodoById } from './updateTodoById';

export {
	createNewTodo,
	findAllTodos,
	findTodoByTitle,
	findTodoById,
	deleteTodo,
	updateTodoById,
};

const todoRepository = Object.freeze({
	createNewTodo,
	findAllTodos,
	findTodoByTitle,
	findTodoById,
	deleteTodo,
	updateTodoById,
});

export type TodoRepositoryType = typeof todoRepository;

export default todoRepository;
