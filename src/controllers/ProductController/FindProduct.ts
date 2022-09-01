import { Request, Response } from 'express';

import Product from '../../models/Product';

class FindProduct {
    async find(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const product = await Product.findById(id);

            return res.status(200).json(product);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
} 

export default new FindProduct();