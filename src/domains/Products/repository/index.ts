import { createNewProduct } from './createProduct';
import { deleteProduct } from './deleteProduct';
import { findAllProducts } from './findAllProducts';
import { findProductById } from './findProductById';
import { findProductByName } from './findProductByName';
import { updateProductById } from './updateProductById';

export {
	createNewProduct,
	findAllProducts,
	findProductByName,
	findProductById,
	deleteProduct,
	updateProductById,
};

const productRepository = Object.freeze({
	createNewProduct,
	findAllProducts,
	findProductByName,
	findProductById,
	deleteProduct,
	updateProductById,
});

export type productRepositoryType = typeof productRepository;

export default productRepository;
