import { makeCreateOrderEntity } from './order';

const createOrderEntity = makeCreateOrderEntity();

export { createOrderEntity };

export type createOrderEntityType = typeof createOrderEntity

export default createOrderEntity;
// export type UserInfoValidator = typeof Validate
