import 'dotenv/config'
import otp from 'generate-otp'
import * as helper from '../helpers'
import * as template from '../templates'
import status from '../config/status'
import { Create, FindOne, Delete } from '../database/queries'
import sendEmail from '../helpers/mailer/mail'

/**
 * A class to handle user local authentication
 */
export default class AuthLocalController {
  /**
   * @description user signup function
   * @param {object} req request from user
   * @param {object} res response from server
   * @return {object} user information & token
   */
  static async signup(req, res) {
    req.body.password = helper.password.hash(req.body.password)
    try {
      const response = await Create('User', req.body)
      return (
        delete response.password &&
        res.status(status.CREATED).json({ response })
      )
    } catch (error) {
      return res.status(status.BAD_REQUEST).send({
        error:
          'Sorry, we can not create your account right now. Try again later',
      })
    }
  }
  static async registerEmail(req, res) {
    const { email } = req.body
    const code = otp.generate(6)
    const data = {
      email,
      code,
    }
    try {
      const response = await Create('VerifyEmail', data)
      const { message, subject } = template.account.sendEmailOtp(data.code)
      await sendEmail(response, message, subject)
      return res
        .status(status.CREATED)
        .json({ response: { email: response.email } })
    } catch (error) {
      return res.status(status.BAD_REQUEST).send({
        error:
          'Sorry, we can not create your account right now. Try again later',
          message: error.message
      })
    }
  }
  static async registerVerify(req, res) {
    const { email, code } = req.body
    const response = await FindOne('VerifyEmail', {
      email,
      code,
    })
    if(Object.keys(response).length === 0){
      return res.status(status.NOT_FOUND).send({
          error: 'Sorry, we can not find the OTP you provided, try again later',
        })
    } 
    return res.status(status.CREATED).json({ response })
  }

  static async registerComplete(req, res) {
    const {
      email,
      code,
      password,
      firstName,
      lastName,
      phoneNumber,
      ID,
      province,
      district,
      sector,
      cell,
    } = req.body
    try {
      // 1. REGISTER A USER
      const newPassword = helper.password.hash(password)
      const response = await Create('User', {
        password: newPassword,
        email,
      })
      // 2. CREATE USER PROFILE INFO
      const user = await Create('Profile', {
        userId: response.id,
        firstName,
        lastName,
        ID,
        phoneNumber,
        province,
        district,
        sector,
        cell
      })
      // 3. CHECK AND DELETE OTP CODE
      await Delete('VerifyEmail', {
        email,
        code,
      })
      return (
        delete response.password &&
        res.status(status.CREATED).json({ response })
      )
    } catch (error) {
      // IF NOT REGISTERED, ROLL BACK
      await Delete('User', {
        email,
      })
      // IF ERROR IS UNIQUE CONSTRAINT
      if (error.name === 'SequelizeUniqueConstraintError') {
        return res.status(status.EXIST).send({
          error: 'Account with email or phone number already exists',
        })
      }

      return res.status(status.BAD_REQUEST).send({
        error:
          'Sorry, we can not register your account at this moment. Refresh the page and try again',
          message: error.message,
      })
    }
  }

  static async login(req, res) {
    const { password } = req.body
    const user = req.auth

    // get profile info
    const profile = await FindOne('Profile', {
      userId: user.id,
    })
    if (Object.keys(user).length > 0) {
      const comparePassword = helper.password.compare(
        password,
        user.password || ''
      )
      if (!comparePassword) {
        return res.status(status.UNAUTHORIZED).json({
          error: 'The credentials you provided are incorrect',
        })
      }
      const payload = {
        id: user.id,
      }
      const token = helper.token.generate(payload)
      delete user.password
      return (
        user &&
        profile &&
        res.status(status.OK).json({
          user,
          profile,
          token,
        })
      )
    } else {
      return res.status(status.UNAUTHORIZED).json({
        error: 'The credentials you provided are incorrect',
      })
    }
  }

  static async getUser(req, res) {
    return req.user
      ? delete req.user.password &&
          res.status(status.OK).json({
            user: req.user,
          })
      : res.status(status.NOT_FOUND).send({
          error: 'The account is not found at this moment.',
        })
  }
}
