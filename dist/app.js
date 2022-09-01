"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const ProductRoutes_1 = __importDefault(require("./routes/ProductRoutes"));
const CustomerRoutes_1 = __importDefault(require("./routes/CustomerRoutes"));
require("reflect-metadata");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, body_parser_1.default)());
app.use('/product', ProductRoutes_1.default);
app.use('/customer', CustomerRoutes_1.default);
app.use('/', (req, res) => {
    res.status(200).json({ msg: 'API IS ALIVE!' });
});
exports.default = app;
