import { Request, Response } from 'express';

import Customer from '../../models/Customer';

class CreateCustomer {
    async create(req: Request, res: Response) {
        const { name, email, phone, note, categories } = req.body;

        try {
            const customer = await Customer.create({
                name,
                email,
                phone,
                note,
                categories
            });

            return res.status(200).json(customer);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
} 

export default new CreateCustomer();