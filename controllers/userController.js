import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import Excersise from "../models/ExcersiseModel.js";
import cloudinary from 'cloudinary';
import {promises as fs } from 'fs';



export const getAllUsers = async (req, res)=> {
    const users = await User.find();
    res.status(StatusCodes.OK).json({users});
};

export const getUser = async (req, res)=>{
    const user = await User.findById(req.params.userId);

    
    res.status(StatusCodes.OK).json({user});
 
};

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
    
    const newUser = {...req.body};
    delete newUser.password;

    if(req.file){
        const response = await cloudinary.v2.uploader.upload(req.file.path);
        await fs.unlink(req.file.path);
        newUser.avatar = response.secure_url
        newUser.avatarPublicId = response.public_id
    }
    const editedUser = await User.findByIdAndUpdate(req.user.userId, newUser);
    if(req.file && editedUser.avatarPublicId ){
        await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId);
    }
    res.status(StatusCodes.OK).json({message:'Edycja użytkownika'});
};

export const deleteUser = async (req,res) =>{
    const removedUser = await User.findByIdAndDelete(req.user.userId);
    res.status(StatusCodes.OK).json({message:'Użytkownik usunięty!'});
};