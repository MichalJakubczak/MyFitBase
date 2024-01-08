import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';
import excersiseRouter from './routes/excersiseRouter.js';
import mongoose from 'mongoose';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';
import notesRouter from './routes/noteRouter.js';
import {authenticateUser} from './middleware/authMiddleware.js';
import cookieParser from 'cookie-parser';




if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use(cookieParser());

app.use(express.json());


app.get('/', (req,res)=>{
    res.send('Hello World');
});

app.get('/api/v1/test',(req,res)=>{
    res.json({message:'test route'});
})

app.use('/api/v1/notes', authenticateUser, notesRouter);

app.use('/api/v1/excersises', authenticateUser, excersiseRouter);
app.use('/api/v1/users', authenticateUser, userRouter);
app.use('/api/v1/auth', authRouter);

app.use('*', (req, res)=>{
    res.status(404).json({message: 'Błąd 404 - nie znaleziono!'})
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100

try {
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(port,() =>{
        console.log(`serwer pracuje na porcie ${port}...`)
    });
} catch (error) {
    console.log(error);
    process.exit(1);
}

