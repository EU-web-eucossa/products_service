import { TypeMapper } from '@eucossa-web2-product-service-common/utils';
import { makeCreateProductController } from './createProduct';
import { makeDeleteProductByIdController } from './deleteProductById';
import { makeFindProductByIdController } from './findProductById';
import { makeFindProductByNameController } from './findProductByName';
import { makeFindProductsController } from './findProducts';
import { makeUpdateProductByIdController } from './updateProductById';
import useCase from '../use-cases';

const createProductController = makeCreateProductController({
	useCase,
});
const deleteProductByIdController = makeDeleteProductByIdController({
	useCase,
});
const findProductByNameController = makeFindProductByNameController({
	useCase,
});
const findProductByIdController = makeFindProductByIdController({
	useCase,
});

const findProductsController = makeFindProductsController({
	useCase,
});
const updateProductByIdController = makeUpdateProductByIdController({
	useCase,
});

export {
	createProductController,
	deleteProductByIdController,
	findProductByNameController,
	findProductByIdController,
	findProductsController,
	updateProductByIdController,
};

const productController = Object.freeze({
	createProductController,
	deleteProductByIdController,
	findProductByNameController,
	findProductByIdController,
	findProductsController,
	updateProductByIdController,
});

type controllerType = typeof productController;

export default productController;

export type ProductControllerType =
	TypeMapper<controllerType>[keyof controllerType];
