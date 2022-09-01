import { Router } from 'express';

const router = Router();

import CreateProduct from '../controllers/ProductController/CreateProduct';
import UpdateProduct from '../controllers/ProductController/UpdateProduct';
import ShowAllProduct from '../controllers/ProductController/ShowAllProduct';
import FindProduct from '../controllers/ProductController/FindProduct';
import DeleteProduct from '../controllers/ProductController/DeleteProduct';

router.post('/', CreateProduct.create);
router.put('/:id', UpdateProduct.update);
router.get('/', ShowAllProduct.show);
router.get('/:id', FindProduct.find);
router.delete('/:id', DeleteProduct.delete);

export default router;