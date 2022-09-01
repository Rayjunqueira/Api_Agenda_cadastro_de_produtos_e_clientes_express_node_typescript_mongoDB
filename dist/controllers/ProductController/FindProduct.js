"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("../../models/Product"));
class FindProduct {
    async find(req, res) {
        const { id } = req.params;
        try {
            const product = await Product_1.default.findById(id);
            return res.status(200).json(product);
        }
        catch (err) {
            return res.status(500).json(err);
        }
    }
}
exports.default = new FindProduct();
