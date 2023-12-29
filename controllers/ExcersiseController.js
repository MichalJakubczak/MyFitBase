import Excersise from '../models/ExcersiseModel.js';


import { nanoid } from 'nanoid';

let excercises = [
    {id:nanoid(),name:'Wyciskanie sztangi leżąc', mainMuscles:'piersiowy większy',addsMuscles:'trójgłowy ramienia' },
    {id:nanoid(),name:'Przysiad ze sztangą', mainMuscles:'czworogłowy uda', addsMuscles:'dwugłowy uda'}
];

export const getAllExcersises = async (req, res)=> {
    const excercises = await Excersise.find({});
    res.status(200).json({excercises});
};

export const createExcersises = async (req, res)=>{
    
    const {excersiseName, mainMuscle, addsMuscle, excersiseDescription} = req.body;
   const excercise =  await Excersise.create({excersiseName, mainMuscle, addsMuscle, excersiseDescription})
    res.status(201).json({excercise});
};

export const getExcersise = async (req, res)=>{
    const {id} = req.params
    const excercise = await Excersise.findById(id);
    if(!excercise){
        return res.status(404).json({message:`Nie ma ćwiczenia z id ${id}`});
    }
    res.status(200).json({excercise});
 
};

export const editExcersise = async (req, res)=>{
    const {name, mainMuscles, addsMuscles} = req.body
    if(!name || !mainMuscles){
        return res.status(400).json({message: 'Proszę, wprowadź nazwę ćwiczenia i partię mieśniową'});
    }
    const {id} = req.params
    const excercise = excercises.find((excercise)=>excercise.id === id);
    if(!excercise){
        return res.status(404).json({message:`Nie ma ćwiczenia z id ${id}`});
    }
    excercise.name = name;
    excercise.mainMuscles = mainMuscles;
    excercise.addsMuscles = addsMuscles;
    res.status(200).json({message:'Ćwiczenie zostało pomyślnie zmienione!',excercise});
 
};

export const deleteExcersise = async (req, res) => {
    const { id } = req.params;
    const excercise = excercises.find((excercise) => excercise.id === id);
    if (!excercise) {
      return res.status(404).json({ message: `Nie ma ćwiczenia o id ${id}` });
    }
    const newExcersises = excercises.filter((excercise) => excercise.id !== id);
    excercises = newExcersises;
  
    res.status(200).json({ message:'Ćwiczenie usunięte!' });
  };