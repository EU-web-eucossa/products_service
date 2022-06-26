import { TypeMapper } from '@eucossa-web2-product-service-common/utils';
import { makeAddNewProductUseCase } from './addProduct';
import { makeEditProductByIdUseCase } from './editProductById';
import { makeListProductByIdUseCase } from './listProductById';
import { makeListProductByNameUseCase } from './listProductsByName';
import { makeListProductsUseCase } from './listProducts';
import { makeRemoveProductByIdUseCase } from './removeProducts';
import productRepository from '../repository';

const addNewProductUseCase = makeAddNewProductUseCase({
	repository: productRepository,
});
const listProductByNameUseCase = makeListProductByNameUseCase({
	repository: productRepository,
});
const listProductByIdUseCase = makeListProductByIdUseCase({
	repository: productRepository,
});
const listProductsUseCase = makeListProductsUseCase({
	repository: productRepository,
});
const removeProductByIdUseCase = makeRemoveProductByIdUseCase({
	repository: productRepository,
});
const editProductByIdUseCase = makeEditProductByIdUseCase({
	repository: productRepository,
});

export {
	addNewProductUseCase,
	listProductByNameUseCase,
	listProductByIdUseCase,
	listProductsUseCase,
	removeProductByIdUseCase,
	editProductByIdUseCase,
};

const productUseCases = Object.freeze({
	addNewProductUseCase,
	listProductByNameUseCase,
	listProductByIdUseCase,
	listProductsUseCase,
	removeProductByIdUseCase,
	editProductByIdUseCase,
});

type useCases = typeof productUseCases;

export type ProductUseCasesType = TypeMapper<useCases>

export default productUseCases;
