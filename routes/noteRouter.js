import {Router} from 'express';
const router = Router();

import { 
    getNotes, 
    createNote, 
    editNote, 
    deleteNote
} from '../controllers/NoteController.js';
import { validateNotesInput, validateIdParamNote } from '../middleware/validationMiddleware.js';

router.route('/').get(getNotes).post( validateNotesInput, createNote);

router
.route('/:id')
.patch(validateNotesInput, editNote)
.delete( validateIdParamNote, deleteNote);

export default router;