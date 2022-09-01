import { Router } from 'express';

const router = Router();

import CreateCustomer from '../controllers/CustomerController/CreateCustomer';
import UpdateCustomer from '../controllers/CustomerController/UpdateCustomer';
import ShowAllCustomer from '../controllers/CustomerController/ShowAllCustomer';
import FindCustomer from '../controllers/CustomerController/FindCustomer';
import DeleteCustomer from '../controllers/CustomerController/DeleteCustomer';

router.post('/', CreateCustomer.create);
router.put('/:id', UpdateCustomer.update);
router.get('/', ShowAllCustomer.show);
router.get('/:id', FindCustomer.find);
router.delete('/:id', DeleteCustomer.delete);

export default router;