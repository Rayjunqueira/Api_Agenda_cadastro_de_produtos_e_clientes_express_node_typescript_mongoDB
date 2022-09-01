"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const CreateProduct_1 = __importDefault(require("../controllers/ProductController/CreateProduct"));
const UpdateProduct_1 = __importDefault(require("../controllers/ProductController/UpdateProduct"));
const ShowAllProduct_1 = __importDefault(require("../controllers/ProductController/ShowAllProduct"));
const FindProduct_1 = __importDefault(require("../controllers/ProductController/FindProduct"));
const DeleteProduct_1 = __importDefault(require("../controllers/ProductController/DeleteProduct"));
router.post('/', CreateProduct_1.default.create);
router.put('/:id', UpdateProduct_1.default.update);
router.get('/', ShowAllProduct_1.default.show);
router.get('/:id', FindProduct_1.default.find);
router.delete('/:id', DeleteProduct_1.default.delete);
exports.default = router;
