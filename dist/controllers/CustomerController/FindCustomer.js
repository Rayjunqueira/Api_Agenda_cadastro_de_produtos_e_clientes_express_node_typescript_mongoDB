"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = __importDefault(require("../../models/Customer"));
class FindCustomer {
    async find(req, res) {
        const { id } = req.params;
        try {
            const customer = await Customer_1.default.findById(id);
            return res.status(200).json(customer);
        }
        catch (err) {
            return res.status(500).json(err);
        }
    }
}
exports.default = new FindCustomer();
