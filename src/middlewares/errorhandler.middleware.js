"use strict"

import CustomError from "../helpers/customError.js";


const errorHandler = (err, req, res, next) => {

    return res.status(res?.errorStatusCode || 500).send({
        error: true,
        message: err.message,
        cause: err.cause,
        body: req.body,
        stack: err.stack
    });
};

const notFoundHandler= (req, res, next) => {
    next(new CustomError('route not Found',404))
}

export { errorHandler, notFoundHandler };