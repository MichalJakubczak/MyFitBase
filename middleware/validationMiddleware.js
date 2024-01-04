import {body,param, validationResult} from 'express-validator';
import { BadRequestError, NotFoundError } from '../errors/customErrors.js';
import { EXERCISE_STATUS } from '../utils/constants.js';
import mongoose from 'mongoose';
import Excersise from '../models/ExcersiseModel.js';
import User from '../models/UserModel.js';


const withValidationErrors = (validateValues) =>{
    return [
        validateValues, (req, res, next)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            const errorMessages = errors.array().map((error)=>error.msg);
            if(errorMessages[0].startsWith('brak ćwiczenia')){
                throw new NotFoundError(errorMessages);
            }
            throw new BadRequestError(errorMessages);
        }
    next();
    },
];
};

export const validateExerciseInput = withValidationErrors([
    body('excersiseName').notEmpty().withMessage('Nazwa ćwiczenia jest wymagana!'),
    body('mainMuscle').notEmpty().withMessage('Nazwa partii mięśniowej jest wymagana!'),
    body('excersiseDescription').notEmpty().withMessage('Opis ćwiczenia jest wymagany!'),
    body('excersiseType').isIn(Object.values(EXERCISE_STATUS)).withMessage('Brak typu ćwiczenia!')
]);


export const validateIdParam = withValidationErrors([
    param('id')
    .custom(async(value)=>{
        const isValidId = mongoose.Types.ObjectId.isValid(value);
        if(!isValidId) throw new BadRequestError('invalid MondoDB id')
        const excercise = await Excersise.findById(value);

    if(!excercise) throw new NotFoundError(`Nie ma ćwiczenia z id ${value}`);

    }),
])

export const validateRegisterInput = withValidationErrors([
    body('username')
    .notEmpty()
    .withMessage('Użytkownik musi mieć swoją nazwę!')
    .custom(async(username)=>{
        const user = await User.findOne({username})
        if(user){
            throw new BadRequestError('Podana nazwa użytkownika jest zajęta!');
        }
    }),
    body('email')
    .notEmpty()
    .withMessage('Użytkownik musi mieć podany adres email!')
    .isEmail()
    .withMessage('Niepoprawny adres email!')
    .custom(async(email)=>{
        const user = await User.findOne({email})
        if(user){
            throw new BadRequestError('Email jest już używany!');
        }
    }),
    body('password')
    .notEmpty()
    .withMessage('Użytkownik musi posiadać hasło!')
    .isLength({min:8})
    .withMessage('Hasło musi zawierać minimum 8 znaków!')

]);

export const validateLoginInput = withValidationErrors([
    
    body('email')
    .notEmpty()
    .withMessage('Użytkownik musi mieć podany adres email!')
    .isEmail()
    .withMessage('Niepoprawny adres email!'),
    
    body('password')
    .notEmpty()
    .withMessage('Użytkownik musi posiadać hasło!')
    
]);


























/*
export const validateTest = withValidationErrors([
    body('name')
    .notEmpty()
    .withMessage('nazwa użytkownika jest wymagana')
    .isLength({min:3, max:50})
    .withMessage('nazwa musi mieć min 3 max 50 znaków')
    .trim()
],)

*/