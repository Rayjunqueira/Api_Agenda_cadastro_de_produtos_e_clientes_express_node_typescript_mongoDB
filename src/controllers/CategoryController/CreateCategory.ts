import { Request, Response } from 'express';

import Category from '../../models/Category';

class CreateCategory {
    async create(req: Request, res: Response) {
        const { name } = req.body;

        try {
            const category = await Category.create({
                name,
            });

            return res.status(200).json(category);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
} 

export default new CreateCategory();