import { Router } from "express";
import { editUser, getApplicationStats, getCurrentUser } from "../controllers/userController.js";

const router = Router();

router.get('/current-user', getCurrentUser );
router.get('/admin/app-stats', getApplicationStats);
router.patch('/edit-user', editUser);


export default router;