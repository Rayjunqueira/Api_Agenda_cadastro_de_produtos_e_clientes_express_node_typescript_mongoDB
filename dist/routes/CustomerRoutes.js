"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const CreateCustomer_1 = __importDefault(require("../controllers/CustomerController/CreateCustomer"));
const UpdateCustomer_1 = __importDefault(require("../controllers/CustomerController/UpdateCustomer"));
const ShowAllCustomer_1 = __importDefault(require("../controllers/CustomerController/ShowAllCustomer"));
const FindCustomer_1 = __importDefault(require("../controllers/CustomerController/FindCustomer"));
const DeleteCustomer_1 = __importDefault(require("../controllers/CustomerController/DeleteCustomer"));
router.post('/', CreateCustomer_1.default.create);
router.put('/:id', UpdateCustomer_1.default.update);
router.get('/', ShowAllCustomer_1.default.show);
router.get('/:id', FindCustomer_1.default.find);
router.delete('/:id', DeleteCustomer_1.default.delete);
exports.default = router;
