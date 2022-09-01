"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = __importDefault(require("../../models/Customer"));
class CreateCustomer {
    async create(req, res) {
        const { name, email, phone, note, categories } = req.body;
        try {
            const customer = await Customer_1.default.create({
                name,
                email,
                phone,
                note,
                categories
            });
            return res.status(200).json(customer);
        }
        catch (err) {
            return res.status(500).json(err);
        }
    }
}
exports.default = new CreateCustomer();
