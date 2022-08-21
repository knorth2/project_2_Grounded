const mongoose = require('mongoose')

//Create Schema
const mindfulSchema = new mongoose.Schema({
    date: {type: String, required: true},
    name: {type: String, trim: true, required: true},
    beforeActivity: {type: String, trim: true},
    afterActivity: {type: String, trim: true},
    water: Number,
    sleep: Number,
    postiveEvent: {type: String, trim: true},
})

const Mindful = mongoose.model('Mindful', mindfulSchema)

module.exports = Mindful