import express from 'express';
import DisplacementController from '../../controllers/DisplacementController';
import asyncHandler from '../../middlewares/asyncHandler'
import verifyToken from '../../middlewares/verifyToken';
const router = express.Router();

router.post('/left-village', verifyToken, asyncHandler(DisplacementController.requestToLeaveVillage));
router.post('/:userId/approve-leaving', asyncHandler(DisplacementController.approveLeaving));
router.get('/history', verifyToken, asyncHandler(DisplacementController.getHistory));
router.get('/displacement-requests', verifyToken, asyncHandler(DisplacementController.getDisplacementRequests))

export default router;
