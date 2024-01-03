import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (err, req, res, next)=>{
    console.log(err);
    const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
    const message = err.message || 'coś poszło nie tak, spróbuj ponownie później...'
    res.status(statusCode).json({message:'Coś poszło nie tak'});
};

export default errorHandlerMiddleware;