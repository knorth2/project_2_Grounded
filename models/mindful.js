const mongoose = require('mongoose')

//Create Schema
const mindfulSchema = new mongoose.Schema({
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