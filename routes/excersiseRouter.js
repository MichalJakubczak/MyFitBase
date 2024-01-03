import {Router} from 'express';
const router = Router();

import {
    getAllExcersises, 
    getExcersise, 
    createExcersises, 
    editExcersise, 
    deleteExcersise
} from '../controllers/ExcersiseController.js';
import { validateExerciseInput, validateIdParam } from '../middleware/validationMiddleware.js';

router.route('/').get(getAllExcersises).post( validateExerciseInput, createExcersises);
router
.route('/:id')
.get(validateIdParam, getExcersise)
.patch(validateExerciseInput,validateIdParam, editExcersise)
.delete( validateIdParam, deleteExcersise);

export default router;