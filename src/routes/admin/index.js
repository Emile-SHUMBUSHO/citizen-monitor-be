import express from 'express';
import AdminController from '../../controllers/admin/AdminController';
import { isAdmin } from '../../middlewares';
import asyncHandler from '../../middlewares/asyncHandler'
import verifyToken from '../../middlewares/verifyToken';
const router = express.Router();

router.get('/citizens', verifyToken, isAdmin, asyncHandler(AdminController.getAllCitizens));
router.post('/citizens/:id/change-to-leader', verifyToken, isAdmin, asyncHandler(AdminController.changeRoleToLeader));
router.post('/citizens/:id/change-to-citizen', verifyToken, isAdmin, asyncHandler(AdminController.changeRoleToCitizen));
router.post('/citizens/changeRole', asyncHandler(AdminController.updateUserRole))

export default router;
