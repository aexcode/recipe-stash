// Dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create recipe schema
const recipeSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  image: { type: String },
  url: { type: String, required: true },
})

// Export recipe model
module.exports = Recipe = mongoose.model('Recipe', recipeSchema)
