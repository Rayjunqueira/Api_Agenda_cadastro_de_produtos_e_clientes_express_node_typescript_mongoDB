import { Request, Response } from 'express';

import Product from '../../models/Product';

class DeleteProduct {
    async delete(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const product = await Product.findByIdAndDelete(id);

            return res.status(200).json('Product deleted!');
        } catch (err) {
            return res.status(500).json(err);
        }
    }
} 

export default new DeleteProduct();