import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import Excersise from "../models/ExcersiseModel.js";

export const getCurrentUser = async (req,res) =>{
    const user = await User.findOne({_id:req.user.userId});
    const userWithoutPassword = user.toJSON();
    res.status(StatusCodes.OK).json({user: userWithoutPassword});
};

export const getApplicationStats = async (req,res) =>{
    res.status(StatusCodes.OK).json({message:'statystyki aplikacji'});
};

export const editUser = async (req,res) =>{
    res.status(StatusCodes.OK).json({message:'Edycja użytkownika'});
};

export const deleteUser = async (req,res) =>{
    const removedUser = await User.findByIdAndDelete(req.params.id)
    res.status(StatusCodes.OK).json({message:'Użytkownik usunięty!'});
};