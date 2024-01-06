import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (err, req, res, next)=>{
    console.log(err);
    const statusCode = err.statusCode || StatusCodes.BAD_REQUEST;
    const message = err.message || 'Coś poszło nie tak';
    res.status(statusCode).json({message});
};

export default errorHandlerMiddleware;