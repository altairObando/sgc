import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv'
import cors from 'cors';
import BaseRouter from './src/config/routes/index'
import { env } from 'process';
var morgan = require('morgan')
dotenv.config()
console.log(env.DATABASE);
const app: Express = express();
const port = process.env.PORT || 5000;

//app.use(morgan)
const allowedOrigins = ['http://localhost', 'http://localhost:3000', 'http://localhost:5000'];
const options : cors.CorsOptions = {
    origin: allowedOrigins
}
app.use(cors(options));
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(new BaseRouter().routes );

app.listen(port, ()=>{
    console.log(`🚀[server]: Server running at http://localhost:${port}     `);
});