import { makeCreateTodoEntity } from './todo';

const createTodoEntity = makeCreateTodoEntity();

export { createTodoEntity };

export type createTodoEntityType = typeof createTodoEntity

export default createTodoEntity;
// export type UserInfoValidator = typeof Validate
