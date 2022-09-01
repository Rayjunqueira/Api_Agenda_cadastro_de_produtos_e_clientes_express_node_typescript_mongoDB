import { Request, Response } from 'express';

import Customer from '../../models/Customer';

class UpdateCustomer {
    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { name, email, phone, note, categories } = req.body;

        try {
            await Customer.findByIdAndUpdate(id, {
                name: name,
                email: email,
                phone: phone,
                note: note,
                categories: categories,
            });

            return res.status(200).json('Customer updated!');
        } catch (err) {
            return res.status(500).json(err);
        }
    }
} 

export default new UpdateCustomer();