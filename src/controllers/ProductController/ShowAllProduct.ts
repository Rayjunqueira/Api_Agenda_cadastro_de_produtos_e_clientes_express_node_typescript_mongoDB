import { Request, Response } from 'express';

import Product from '../../models/Product';

class ShowAllProduct {
    async show(req: Request, res: Response) {

        try {
            const product = await Product.find();

            return res.status(200).json(product);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
} 

export default new ShowAllProduct();