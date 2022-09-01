import { Request, Response } from 'express';

import Category from '../../models/Category';

class ShowAllCategory {
    async show(req: Request, res: Response) {

        try {
            const category = await Category.find();

            return res.status(200).json(category);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
} 

export default new ShowAllCategory();