import express from 'express';
import AddressController from '../../controllers/AddressController';
import asyncHandler from '../../middlewares/asyncHandler'
const router = express.Router();

router.post('/:userId/approve', asyncHandler(AddressController.approveAddress));

export default router;
