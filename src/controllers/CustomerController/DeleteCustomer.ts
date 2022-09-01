import { Request, Response } from 'express';

import Customer from '../../models/Customer';

class DeleteCustomer {
    async delete(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const customer = await Customer.findByIdAndDelete(id);

            return res.status(200).json('Customer deleted!');
        } catch (err) {
            return res.status(500).json(err);
        }
    }
} 

export default new DeleteCustomer();