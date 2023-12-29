import {Router} from 'express';
const router = Router();

import {
    getAllExcersises, 
    getExcersise, 
    createExcersises, 
    editExcersise, 
    deleteExcersise
} from '../controllers/ExcersiseController.js';

router.route('/').get(getAllExcersises).post(createExcersises);
router.route('/:id').get(getExcersise).patch(editExcersise).delete(deleteExcersise);

export default router;