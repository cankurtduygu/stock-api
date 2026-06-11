import express from 'express';
import cors from 'cors';
import errorHandler from "./src/middlewares/errorhandler.middleware.js";


const app = express()

app.use(express.json());
app.use(cors());



// Global hata yakalayıcı (en sonda olmalı)
app.use(errorHandler);

export default app;