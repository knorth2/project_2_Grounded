const mongoose = require('mongoose')

//Create Schema
const mindfulSchema = new mongoose.Schema({
    date: {type: String, required: true},
    activityName: {type: String, required: true},
    stateOfMindBeforeActivity: String,
    stateOfMindAfterActivity: String,
    waterConsumption: Number,
    hoursSlept: Number,
    postiveOccuranceOfTheDay: String,
})

const Mindful = mongoose.model('Mindful', mindfulSchema)

module.exports.Mindful