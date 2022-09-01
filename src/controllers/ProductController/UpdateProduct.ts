import { Request, Response } from 'express';

import Product from '../../models/Product';

class UpdateProduct {
    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { name, desc, price, stock, categories } = req.body;

        try {
            await Product.findByIdAndUpdate(id, {
                name: name,
                desc: desc,
                price: price,
                stock: stock,
                categories: categories,
            });

            return res.status(200).json('Product updated!');
        } catch (err) {
            return res.status(500).json(err);
        }
    }
} 

export default new UpdateProduct();