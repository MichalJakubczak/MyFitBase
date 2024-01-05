import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import Excersise from "../models/ExcersiseModel.js";

export const getCurrentUser = async (req,res) =>{
    res.status(StatusCodes.OK).json({message:'aktualny użytkownik'});
};

export const getApplicationStats = async (req,res) =>{
    res.status(StatusCodes.OK).json({message:'statystyki aplikacji'});
};

export const editUser = async (req,res) =>{
    res.status(StatusCodes.OK).json({message:'Edycja użytkownika'});
};