import Excersise from '../models/ExcersiseModel.js';
import { StatusCodes } from 'http-status-codes';
import { NotFoundError } from '../errors/customErrors.js';

export const getAllExcersises = async (req, res)=> {
    const excercises = await Excersise.find({});
    res.status(StatusCodes.OK).json({excercises});
};

export const createExcersises = async (req, res)=>{
    
    const {excersiseName, mainMuscle, addsMuscle, excersiseDescription} = req.body;
   const excercise =  await Excersise.create({excersiseName, mainMuscle, addsMuscle, excersiseDescription})
    res.status(StatusCodes.CREATED).json({excercise});
};

export const getExcersise = async (req, res)=>{
    const {id} = req.params
    const excercise = await Excersise.findById(id);

    if(!excercise) throw new NotFoundError(`Nie ma ćwiczenia z id ${id}`);

    res.status(StatusCodes.OK).json({excercise});
 
};

export const editExcersise = async (req, res)=>{
    const {id} = req.params

    const editedExcercise = await Excersise.findByIdAndUpdate(id,req.body, {
        new:true
    });
    if(!editedExcercise) throw new NotFoundError(`Nie ma ćwiczenia z id ${id}`);
    
    res.status(StatusCodes.OK).json({message:'Ćwiczenie zostało pomyślnie zmienione!',excercise: editedExcercise});
 
};

export const deleteExcersise = async (req, res) => {
    const { id } = req.params;
    const removedExcercise = await Excersise.findByIdAndDelete(id)

    const excercise = excercises.find((excercise) => excercise.id === id);
    if (!removedExcercise) throw new NotFoundError(`Nie ma ćwiczenia z id ${id}`);
    
    res.status(StatusCodes.OK).json({ message:'Ćwiczenie usunięte!', excercise: removedExcercise });
  };