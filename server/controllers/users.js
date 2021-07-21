// Dependencies
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')
const User = require('../models/user')

// Register a user
// Requires email, password
// Returns registered user
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body

    // Validation check for all fields
    if (!email || !password) {
      return res.status(400).json({ msg: 'Not all fields have been entered' })
    }

    // Validation check for password length
    if (password.length < 8) {
      return res
        .status(400)
        .json({ msg: 'Password must be at least 8 characters long' })
    }
    // Validation check for existing user
    const existingUser = await User.findOne({ email: email })

    if (existingUser) {
      return res
        .status(400)
        .json({ msg: 'An account with this email address already exists' })
    }

    // Hash password
    const passwordHash = await bcrypt.hashSync(password, bcrypt.genSaltSync(10))

    // Create new user model
    const newUser = new User({
      email,
      password: passwordHash,
    })

    // Save user to database
    const savedUser = await newUser.save()
    res.json(savedUser)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Login a user
// Requires email, password
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    // Validation check for all fields
    if (!email || !password) {
      return res.status(400).json({ msg: 'Not all fields have been entered' })
    }

    // Validation check for password to email address
    const user = await User.findOne({ email: email })
    if (!user) {
      return res.status(400).json({
        msg: 'No account with this email address has been registered ',
      })
    }

    // Compare password and hash
    const isMatch = await bcrypt.compareSync(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' })
    }

    // Sign jsonwebtoken
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
    res.json({
      token,
      user,
    })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Verify Auth Token
router.post('/isTokenValid', async (req, res) => {
  try {
    const token = req.header('auth-token')
    if (!token) return res.json(false)

    const verified = jwt.verify(token, process.env.JWT_SECRET)
    if (!verified) return res.json(false)

    const user = await User.findById(verified.id)
    if (!user) return res.json(false)

    return res.json(true)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Return logged in user's ID
router.get('/', auth, async (req, res) => {
  const user = await User.findById(req.user)
  res.json({
    id: user._id,
  })
})

// Exports
module.exports = router
