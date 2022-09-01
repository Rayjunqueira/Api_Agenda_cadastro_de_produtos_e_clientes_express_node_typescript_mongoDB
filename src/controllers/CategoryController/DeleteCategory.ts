import { Request, Response } from 'express';

import Category from '../../models/Category';

class DeleteCategory {
    async delete(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const category = await Category.findByIdAndDelete(id);

            return res.status(200).json('Category deleted!');
        } catch (err) {
            return res.status(500).json(err);
        }
    }
} 

export default new DeleteCategory();