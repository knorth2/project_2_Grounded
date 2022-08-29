const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: String,
  ownedMindful: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mindful',
  }] // if you want a list of events attached to the user
})

const User = mongoose.model('User', userSchema)

module.exports = User