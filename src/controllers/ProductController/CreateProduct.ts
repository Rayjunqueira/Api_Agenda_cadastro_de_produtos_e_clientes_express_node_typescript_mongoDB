import { Request, Response } from 'express';

import Product from '../../models/Product';

class CreateProduct {
    async create(req: Request, res: Response) {
        const { name, desc, price, stock, categories } = req.body;

        try {
            const product = await Product.create({
                name,
                desc,
                price,
                stock,
                categories
            });

            return res.status(200).json(product);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
} 

export default new CreateProduct();