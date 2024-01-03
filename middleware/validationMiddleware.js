import {body,param, validationResult} from 'express-validator';
import { BadRequestError } from '../errors/customErrors.js';
import { EXERCISE_STATUS } from '../utils/constants.js';
import mongoose from 'mongoose';


const withValidationErrors = (validateValues) =>{
    return [
        validateValues, (req, res, next)=>{
        const errors = validationResult(req);
        console.log(errors) ; 
        if(!errors.isEmpty()){
            const errorMessages = errors.array().map((error)=>error.message);
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
    param('id').custom((value)=>mongoose.Types.ObjectId.isValid(value))
    .withMessage('invalid MondoDB id'),
])




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