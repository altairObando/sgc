import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv'
var morgan = require('morgan')
dotenv.config()

const app: Express = express();
const port = process.env.PORT || 5000;

import BaseRouter from './src/config/routes/index'

// app.use(morgan)
app.use(new BaseRouter().routes );

app.listen(port, ()=>{
    console.log(`🚀[server]: Server running at https://localhost:${port}     `);
});