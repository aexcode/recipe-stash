// Dependencies
const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const Recipe = require('../models/recipe')
const User = require('../models/user')

// Index: Get all user's recipes
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).populate('recipes')
    res.send({ success: true, recipes: user.recipes })
  } catch (error) {
    res
      .status(400)
      .json({ success: false, msg: 'Failed to get recipes. Please try again.' })
  }
})

// New: Add a new recipe
router.post('/', auth, async (req, res) => {
  try {
    // Create new recipe
    const newRecipe = await Recipe.create({ userId: req.userId, ...req.body })

    // Add new recipe ID to the user's recipe array
    const user = await User.findByIdAndUpdate(
      req.userId,
      {
        $push: { recipes: newRecipe._id },
      },
      { new: true }
    )

    res.send({ success: true, recipes: user.recipes })
  } catch (error) {
    res
      .status(400)
      .json({ success: false, msg: 'Failed to add recipe. Please try again.' })
  }
})

// Export recipe router
module.exports = router
