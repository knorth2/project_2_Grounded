const express = require('express')
const app = express()
const Mindful = require('./models/mindful.js')
const methodOverride = require('method-override')
const multer = require('multer');
const upload = multer('./models/mindful.js')

// set up access to .env file
require('dotenv').config()

const PORT = process.env.PORT

//import mongoose
const mongoose = require('mongoose')
const mongoURI = process.env.MONGODB_URI

mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
	console.log('connected to mongo');
});

//middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

const mindfulController = require('./controllers/mindfulController.js')
app.use('/mindful', mindfulController)

//default route
app.get('/', (req, res)=>{
    res.send('Are you listening?')
})

app.listen(PORT, ()=>{
    console.log(`Listening on port, ${PORT}🧘🏼‍♀️`)
})