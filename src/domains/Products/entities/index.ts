import { makeCreateProductEntity } from './product';

const createProductEntity = makeCreateProductEntity();

export { createProductEntity };

export type createProductEntityType = typeof createProductEntity

export default createProductEntity;
// export type UserInfoValidator = typeof Validate
