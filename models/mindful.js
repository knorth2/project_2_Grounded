const mongoose = require('mongoose')

//Create Schema
const mindfulSchema = new mongoose.Schema({
    date: {type: String, required: true},
    name: {type: String, required: true},
    beforeActivity: String,
    afterActivity: String,
    water: Number,
    sleep: Number,
    postive: String,
})

const Mindful = mongoose.model('Mindful', mindfulSchema)

module.exports = Mindful