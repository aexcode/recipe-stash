// Dependencies
const express = require('express')
const router = express.Router()
const Axios = require('axios')
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
    const url = req.body.url

    const BASE_URL = `http://api.linkpreview.net/?key=${process.env.LINK_PREVIEW_API_KEY}`
    const COMPLETE_URL = `${BASE_URL}&q=${url}`
    const { data } = await Axios(COMPLETE_URL)

    // Create new recipe
    const newRecipe = await Recipe.create({ userId: req.userId, ...data })

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

// Update: Edit a recipe
router.put('/:id', auth, async (req, res) => {
  try {
    const originalRecipe = await Recipe.findById(req.params.id)
    const updatedRecipe = {
      ...originalRecipe._doc,
      title: req.body.title,
      description: req.body.description,
    }

    const recipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      updatedRecipe,
      {
        new: true,
      }
    )

    res.send({ success: true })
  } catch (error) {
    res.status(400).json({
      success: false,
      msg: 'Failed to update recipe. Please try again.',
    })
  }
})

// Export recipe router
module.exports = router
