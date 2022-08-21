const mongoose = require('mongoose')

//Create Schema
const mindfulSchema = new mongoose.Schema({
    date: String,
    name: String,
    beforeActivity: String,
    afterActivity: String,
    water: Number,
    sleep: Number,
    postiveEvent: String,
})

const Mindful = mongoose.model('Mindful', mindfulSchema)

module.exports = Mindful