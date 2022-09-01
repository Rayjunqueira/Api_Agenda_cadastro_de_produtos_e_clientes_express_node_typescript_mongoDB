import { Request, Response } from 'express';

import Customer from '../../models/Customer';

class FindCustomer {
    async find(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const customer = await Customer.findById(id);

            return res.status(200).json(customer);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
} 

export default new FindCustomer();