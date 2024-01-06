import { Router } from "express";
import { editUser, getApplicationStats, getCurrentUser, deleteUser } from "../controllers/userController.js";
import { validateEditUserInput } from "../middleware/validationMiddleware.js";

const router = Router();

router.get('/current-user', getCurrentUser );
router.get('/admin/app-stats', getApplicationStats);
router.patch('/edit-user',validateEditUserInput, editUser);
router.delete('/delete-user', deleteUser);


export default router;