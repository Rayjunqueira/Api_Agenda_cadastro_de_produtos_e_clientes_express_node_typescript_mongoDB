"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
async function connection() {
    const uri = process.env.MONGO_URI;
    const port = process.env.PORT;
    try {
        await mongoose_1.default.connect(uri);
        console.log('Connected to database');
        app_1.default.listen(port);
        console.log(`Listening on port ${port}`);
    }
    catch (err) {
        console.log(err);
    }
}
connection();
