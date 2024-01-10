import { Router } from "express";
import { editUser, getApplicationStats, getCurrentUser, deleteUser, getAllUsers, getUser } from "../controllers/userController.js";
import { validateEditUserInput } from "../middleware/validationMiddleware.js";
import { authorizePermissions } from "../middleware/authMiddleware.js";
import upload from "../middleware/multerMiddleware.js";

const router = Router();
router.get('/', getAllUsers);
router.get('/current-user', getCurrentUser );
router.get('/admin/app-stats',[authorizePermissions('admin'), getApplicationStats]);
router.patch('/edit-user', upload.single('avatar'), validateEditUserInput, editUser);
router.delete('/delete-user', deleteUser);

router
.route('/:userId')
.get(getUser)
.patch(editUser)
.delete(deleteUser);

export default router;