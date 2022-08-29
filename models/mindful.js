const mongoose = require('mongoose')

//Create Schema
const mindfulSchema = new mongoose.Schema({
    _creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}, // if you want to reference back the other way
    date: String,
    beforeMovement: String,
    water: Number,
    sleep: Number,
    movement: String,
    afterMovement: String,
    positiveEvent: String,
    image: String,
})

const Mindful = mongoose.model('Mindful', mindfulSchema)

module.exports = Mindful