import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';
import excersiseRouter from './routes/excersiseRouter.js';
import mongoose from 'mongoose';


if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}



app.use(express.json());


app.get('/', (req,res)=>{
    res.send('Hello World');
});

app.post('/', (req, res)=>{
console.log(req);
res.json({message: 'data received', data: req.body});
});

app.use('/api/v1/excersises', excersiseRouter);

app.use('*', (req, res)=>{
    res.status(404).json({message: 'Błąd 404 - nie znaleziono!'})
});

app.use((err, req, res, next)=>{
    console.log(err);
    res.status(500).json({message:'Coś poszło nie tak'});
});

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

