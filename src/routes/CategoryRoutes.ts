import { Router } from 'express';

const router = Router();

import CreateCategory from '../controllers/CategoryController/CreateCategory';
import GetCategory from '../controllers/CategoryController/ShowAllCategories';
import DeleteCategory from '../controllers/CategoryController/DeleteCategory';

router.post('/', CreateCategory.create);
router.get('/', GetCategory.show);
router.delete('/:id', DeleteCategory.delete);

export default router;