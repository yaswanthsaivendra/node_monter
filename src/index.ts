import express from 'express';
import errorHandler from './middlewares/errorHandler';
import connectDb from './config/dbConnection';
import dotenv from 'dotenv';

dotenv.config(); // load env vars in process.env
connectDb();    // connect to database
const app = express();

const port = process.env.PORT || 5000

app.use(express.json());


app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});