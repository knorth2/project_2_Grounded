const express = require('express')
const app = express()
const Mindful = require('./models/mindful.js')
const methodOverride = require('method-override')

//setup Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/basiccrud');
mongoose.connection.once('open', () => {
	console.log('connected to mongo');
});

//middleware
