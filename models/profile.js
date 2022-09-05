const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
  age: {
    type: Number,
    required: true,
  },
  startingWeight: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Profile', profileSchema)