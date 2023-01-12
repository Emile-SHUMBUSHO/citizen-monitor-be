import status from '../config/status'

export default async (req, res, next) => {
  const { role } = req.user
  if (role === 'chef') {
    next()
  } else {
    return res.status(status.UNAUTHORIZED).json({
      error: `You are not authorized to perform this action`,
    })
  }
}
