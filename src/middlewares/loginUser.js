import status from '../config/status'
import { FindOne } from '../database/queries'

export default async (req, res, next) => {
  const user = await FindOne('User', {
    email: req.body.email,
    status: 'active',
  })
  if (!Object.keys(user).length) {
    return res.status(status.UNAUTHORIZED).json({
      error: `Account with '${req.body.email}' email do not exist`,
    })
  }
  req.auth = user.get()
  next()
}
