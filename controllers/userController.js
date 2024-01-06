import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import Excersise from "../models/ExcersiseModel.js";

export const getCurrentUser = async (req,res) =>{
    const user = await User.findOne({_id:req.user.userId});
    const userWithoutPassword = user.toJSON();
    res.status(StatusCodes.OK).json({user: userWithoutPassword});
};

export const getApplicationStats = async (req,res) =>{
    const users = await User.countDocuments();
    const excercises = await Excersise.countDocuments();
    res.status(StatusCodes.OK).json({users, excercises});
};

export const editUser = async (req,res) =>{
    const obj = {...req.body};
    delete obj.password;
    console.log(obj);
    const editedUser = await User.findByIdAndUpdate(req.user.userId, obj);
    res.status(StatusCodes.OK).json({message:'Edycja użytkownika'});
};

export const deleteUser = async (req,res) =>{
    const removedUser = await User.findByIdAndDelete(req.user.userId);
    res.status(StatusCodes.OK).json({message:'Użytkownik usunięty!'});
};