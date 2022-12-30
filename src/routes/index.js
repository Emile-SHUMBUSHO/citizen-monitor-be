import express from 'express';
import auth from './auth';
import address from './address';
import displacement from './displacement';

const router = express.Router();

router.use('/auth', auth);
router.use('/address', address)
router.use('/displacement', displacement )

export default router;
