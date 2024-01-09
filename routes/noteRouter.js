import {Router} from 'express';
const router = Router();

import { 
    getAllNotes,
    getNotes, 
    createNote, 
    editNote, 
    deleteNote
} from '../controllers/NoteController.js';
import { validateNotesInput, validateIdParamNote } from '../middleware/validationMiddleware.js';

router.route('/').get(getAllNotes).post( validateNotesInput, createNote);

router
.route('/:id')
.get(validateIdParamNote, getNotes)
.patch(validateNotesInput, editNote)
.delete( validateIdParamNote, deleteNote);

export default router;