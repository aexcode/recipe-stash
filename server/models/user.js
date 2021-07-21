// Dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create user schema
const userSchema = new Schema({
  email: { type: String, lowercase: true, required: true, unique: true },
  password: { type: String, required: true, minLength: 8 },
  recipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],
})

// Remove the password property when serializing doc to JSON
userSchema.set('toJSON', {
  transform: function (doc, ret) {
    delete ret.password
    return ret
  },
})

// Export user model
module.exports = User = mongoose.model('User', userSchema)
