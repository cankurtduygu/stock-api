import express from 'express';
import cors from 'cors';
import routes from "./src/routes/index.js";
import { errorHandler, notFoundHandler } from "./src/middlewares/errorhandler.middleware.js";
import queryHandler from './src/middlewares/queryHandler.js';


const app = express()

app.use(express.json());
app.use(cors());

//
app.use(queryHandler);

app.use("/", routes);


// Route bulunamazsa:
app.use(notFoundHandler);

// Global hata yakalayıcı (en sonda olmalı)
app.use(errorHandler);


export default app;