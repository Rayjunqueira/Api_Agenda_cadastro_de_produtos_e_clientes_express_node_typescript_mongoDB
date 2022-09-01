"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("../../models/Product"));
class UpdateProduct {
    async update(req, res) {
        const { id } = req.params;
        const { name, desc, price, stock, categories } = req.body;
        try {
            await Product_1.default.findByIdAndUpdate(id, {
                name: name,
                desc: desc,
                price: price,
                stock: stock,
                categories: categories,
            });
            return res.status(200).json('Product updated!');
        }
        catch (err) {
            return res.status(500).json(err);
        }
    }
}
exports.default = new UpdateProduct();
