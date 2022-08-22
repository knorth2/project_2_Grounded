const mongoose = require('mongoose')

//Create Schema
const mindfulSchema = new mongoose.Schema({
    date: {type: String, required: true},
    beforeMovement: String,
    water: Number,
    sleep: Number,
    movement: String,
    afterMovement: String,
    postiveEvent: String,
})

const Mindful = mongoose.model('Mindful', mindfulSchema)

module.exports = Mindful