/* eslint-disable @typescript-eslint/no-explicit-any */
import { ITodo } from '../models/interfaces';

export function makeCreateTodoEntity() {
	return async ({ title, body, done, time }: ITodo) => {
		/**
		 * Validate your inputs here before returning the entity
		 */

		return Object.freeze({
			getTitle: () => title,
			getBody: () => body,
			getDone: () => (done ? done : false),
			getTime: () => time,
		});
	};
}
