import express from 'express';
import DisplacementController from '../../controllers/DisplacementController';
import asyncHandler from '../../middlewares/asyncHandler'
import verifyToken from '../../middlewares/verifyToken';
import { isChef } from '../../middlewares'

const router = express.Router();

router.post('/left-village', verifyToken, asyncHandler(DisplacementController.requestToLeaveVillage));
router.post('/:userId/approve-leaving', verifyToken, isChef, asyncHandler(DisplacementController.approveLeaving));
router.get('/history', verifyToken, asyncHandler(DisplacementController.getHistory));
router.get('/displacement-requests', verifyToken, isChef, asyncHandler(DisplacementController.getDisplacementRequests))

export default router;
