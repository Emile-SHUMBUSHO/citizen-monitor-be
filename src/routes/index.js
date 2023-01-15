import express from 'express';
import auth from './auth';
import address from './address';
import displacement from './displacement';
import admin from './admin';
import citizens from './citizens'

const router = express.Router();

router.use('/auth', auth);
router.use('/address', address)
router.use('/displacement', displacement )
router.use('/admin', admin )
router.use('/citizens', citizens)

export default router;
