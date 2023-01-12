import express from 'express';
import AddressController from '../../controllers/AddressController';
import { isChef, verifyToken } from '../../middlewares';
import asyncHandler from '../../middlewares/asyncHandler'
const router = express.Router();

router.post('/:userId/approve',verifyToken, isChef, asyncHandler(AddressController.approveAddress));

export default router;
