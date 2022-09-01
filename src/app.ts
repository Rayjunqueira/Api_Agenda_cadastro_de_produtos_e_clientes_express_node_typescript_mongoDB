import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { Request, Response } from 'express';
dotenv.config();

import ProductRoutes from './routes/ProductRoutes';
import CustomerRoutes from './routes/CustomerRoutes';
import CategoryRoutes from './routes/CategoryRoutes';

import "reflect-metadata"

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser());

app.use('/product', ProductRoutes);
app.use('/customer', CustomerRoutes);
app.use('/category', CategoryRoutes);

app.use('/', (req: Request, res: Response) => {
    res.status(200).json({ msg: 'API IS ALIVE!' });
})

export default app;