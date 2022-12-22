import express from 'express'
import AuthLocalController from '../../controllers/AuthController'
import asyncHandler from '../../middlewares/asyncHandler'
import verifyToken from '../../middlewares/verifyToken'
import { loginAdmin, loginUser, isInactiveEmail } from '../../middlewares'

const router = express.Router()

router.post('/signup', asyncHandler(AuthLocalController.signup))
router.post(
  '/register/email',
  isInactiveEmail,
  asyncHandler(AuthLocalController.registerEmail)
)
router.post(
  '/register/verify-otp',
  asyncHandler(AuthLocalController.registerVerify) // check time validity
)
router.post(
  '/register/complete',
  asyncHandler(AuthLocalController.registerComplete)
)

// user login route
router.post('/login/public', loginUser, AuthLocalController.login)
router.post('/login/admin', loginAdmin, AuthLocalController.login)
router.get('/user', verifyToken, AuthLocalController.getUser)

export default router
