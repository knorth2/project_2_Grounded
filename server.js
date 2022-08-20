const express = require('express')
const app = express()
const port = 3000
const Mindful = require('./models/mindful.js')
const methodOverride = require('method-override')

//import mongoose
const mongoose = require('mongoose')

//setup Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/basiccrud');
mongoose.connection.once('open', () => {
	console.log('connected to mongo');
});

//middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))

const mindfulController = require('./controllers/mindfulController.js')
app.use('/mindful', mindfulController)

//default route
app.get('/', (req, res)=>{
    res.send('Are you listening?')
})

app.listen(port, ()=>{
    console.log(`Listening on port, ${port}🧘🏼‍♀️`)
})