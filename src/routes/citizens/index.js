import express from 'express';
import CitizenController from '../../controllers/CitizenController';
import { isAdmin, isChef } from '../../middlewares';
import asyncHandler from '../../middlewares/asyncHandler'
import verifyToken from '../../middlewares/verifyToken';

const router = express.Router();

router.get('/', verifyToken, isChef, asyncHandler(CitizenController.ListCitizens));


export default router;
