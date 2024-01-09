import Note from '../models/NoteModel.js';
import { StatusCodes } from 'http-status-codes';


export const getAllNotes = async (req, res)=> {
    const notes = await Note.find({createdBy:req.user.userId});
    res.status(StatusCodes.OK).json({notes});
};

export const getNotes = async (req, res)=>{
    const note = await Note.findById(req.params.id);

    
    res.status(StatusCodes.OK).json({note});
 
};
export const createNote = async (req, res)=>{
    req.body.createdBy = req.user.userId;
    //const {excersiseName, mainMuscle, addsMuscle, excersiseDescription} = req.body;
   const note =  await Note.create(req.body);
    res.status(StatusCodes.CREATED).json({note});
};



export const editNote = async (req, res)=>{

    const editedNote = await Note.findByIdAndUpdate(req.params.id,req.body, {
        new:true
    });
    
    
    res.status(StatusCodes.OK).json({message:'Notatka została pomyślnie zmieniona',note: editedNote});
 
};

export const deleteNote = async (req, res) => {
    const removedNote = await Note.findByIdAndDelete(req.params.id)

   // const excercise = Excercise.find((excercise) => excercise.id === id);
    
    
    res.status(StatusCodes.OK).json({ message:'Notatka została usunięta!', note: removedNote });
  };