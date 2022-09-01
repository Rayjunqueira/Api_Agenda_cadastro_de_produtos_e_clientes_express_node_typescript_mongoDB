"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = __importDefault(require("../../models/Customer"));
class UpdateCustomer {
    async update(req, res) {
        const { id } = req.params;
        const { name, email, phone, note, categories } = req.body;
        try {
            await Customer_1.default.findByIdAndUpdate(id, {
                name: name,
                email: email,
                phone: phone,
                note: note,
                categories: categories,
            });
            return res.status(200).json('Customer updated!');
        }
        catch (err) {
            return res.status(500).json(err);
        }
    }
}
exports.default = new UpdateCustomer();
