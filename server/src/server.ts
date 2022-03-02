import "reflect-metadata";
import 'dotenv/config';

import express from 'express';

import './database/connect';

import routes from './routes'

const app = express();

app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3333, () => {
    console.log("Server is running...")
})