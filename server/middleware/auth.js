const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
  try {
    const token = req.header('auth-token')
    if (!token) {
      return res
        .status(401)
        .json({
          success: false,
          msg: 'No authentication token, access denied.',
        })
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET)
    if (!verified) {
      return res
        .status(401)
        .json({
          success: false,
          msg: 'Token vaerification failed, access denied',
        })
    }

    req.userId = verified.id
    next()
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = auth
