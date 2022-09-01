import { Request, Response } from 'express';

import Customer from '../../models/Customer';

class ShowAllCustomer {
    async show(req: Request, res: Response) {

        try {
            const customer = await Customer.find();

            return res.status(200).json(customer);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
} 

export default new ShowAllCustomer();