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
      const errorMessages = {}

      if (!email) errorMessages.email = 'Please provide a valid email address'
      if (!password) errorMessages.password = 'Please provide a secure password'

      return res.status(400).json({
        success: false,
        messages: errorMessages,
      })
    }

    // Validation check for existing user
    const existingUser = await User.findOne({ email: email })

    if (existingUser) {
      return res.status(409).json({
        success: false,
        messages: {
          email: 'An account with this email address already exists',
        },
      })
    }

    // Validation check for password length
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        messages: {
          password: 'Password must be at least 8 characters long',
        },
      })
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
    res.json({ success: true, user: savedUser })
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message })
  }
})

// Login a user
// Requires email, password
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    // Validation check for all fields
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, msg: 'Not all fields have been entered' })
    }

    // Validation check for password to email address
    const user = await User.findOne({ email: email })
    if (!user) {
      return res.status(400).json({
        success: false,
        msg: 'No account with this email address has been registered ',
      })
    }

    // Compare password and hash
    const isMatch = await bcrypt.compareSync(password, user.password)
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, msg: 'Invalid credentials' })
    }

    // Sign jsonwebtoken
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
    res.json({ success: true, token })
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message })
  }
})

// Verify Auth Token
router.post('/isTokenValid', async (req, res) => {
  try {
    const token = req.header('auth-token')
    if (!token) return res.json({ success: false })

    const verified = jwt.verify(token, process.env.JWT_SECRET)
    if (!verified) return res.json({ success: false })

    const user = await User.findById(verified.id)
    if (!user) return res.json({ success: false })

    return res.json({ success: true })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, msg: error.message })
  }
})

// Return logged in user's ID
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId)
    res.status(200).json({ success: true, id: user._id })
  } catch (error) {
    res.status(400).json(`Something went wrong. Please try again.`)
  }
})

// Exports
module.exports = router
