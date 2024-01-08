import Excersise from '../models/ExcersiseModel.js';
import { StatusCodes } from 'http-status-codes';


export const getAllExcersises = async (req, res)=> {
    const excercises = await Excersise.find();
    res.status(StatusCodes.OK).json({excercises});
};

export const createExcersises = async (req, res)=>{
    req.body.createdBy = req.user.userId;
    //const {excersiseName, mainMuscle, addsMuscle, excersiseDescription} = req.body;
   const excercise =  await Excersise.create(req.body);
    res.status(StatusCodes.CREATED).json({excercise});
};

export const getExcersise = async (req, res)=>{
    const excercise = await Excersise.findById(req.params.id);

    
    res.status(StatusCodes.OK).json({excercise});
 
};

export const editExcersise = async (req, res)=>{

    const editedExcercise = await Excersise.findByIdAndUpdate(req.params.id,req.body, {
        new:true
    });
    
    
    res.status(StatusCodes.OK).json({message:'Ćwiczenie zostało pomyślnie zmienione!',excercise: editedExcercise});
 
};

export const deleteExcersise = async (req, res) => {
    const removedExcercise = await Excersise.findByIdAndDelete(req.params.id)

   // const excercise = Excercise.find((excercise) => excercise.id === id);
    
    
    res.status(StatusCodes.OK).json({ message:'Ćwiczenie usunięte!', excercise: removedExcercise });
  };