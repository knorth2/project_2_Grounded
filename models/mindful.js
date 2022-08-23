const mongoose = require('mongoose')

//Create Schema
const mindfulSchema = new mongoose.Schema({
    date: {type: String, required: true},
    beforeMovement: String,
    water: Number,
    sleep: Number,
    movement: String,
    afterMovement: String,
    positiveEvent: String,
    myPic: Image,
})

const Mindful = mongoose.model('Mindful', mindfulSchema)

module.exports = Mindful