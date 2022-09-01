import app from './app';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function connection () {
    const uri = process.env.MONGO_URI as string;
    const port = process.env.PORT as string;
    try {
        await mongoose.connect(uri);
        console.log('Connected to database');
        app.listen(port);
        console.log(`Listening on port ${port}`);
    } catch (err) {
        console.log(err);
    }
}

connection();