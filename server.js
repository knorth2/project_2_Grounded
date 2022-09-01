const express = require('express')
const app = express()
const Mindful = require('./models/mindful.js')
const methodOverride = require('method-override')
const session = require('express-session')


// set up access to .env file
require('dotenv').config()
const PORT = process.env.PORT

//set up sessions
const SESSION_SECRET = process.env.SESSION_SECRET
console.log('Here is the session secret')
console.log(SESSION_SECRET)
// now we can set up our session with our secret
app.use(session({
	secret: SESSION_SECRET,
	resave: false, 
	saveUninitialized: false 
}))

// custom middleware to make currentUser available as
// a local variable on all ROUTES
app.use((req, res, next) => {
	res.locals.currentUser = req.session.currentUser
	next()
})

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
// this will parse the data and create the "req.body" object
app.use(express.urlencoded({ extended: true }));
// this will allow us to make DELETE and PUT requests
app.use(methodOverride('_method'))

const mindfulController = require('./controllers/mindfulController.js')
app.use('/mindful', mindfulController)

const userController = require('./controllers/userController.js')
app.use('/users', userController)

//default route
app.get('/', (req, res)=>{
	res.redirect("/mindful")
})

app.listen(PORT, ()=>{
    console.log(`Listening on port, ${PORT}🧘🏼‍♀️`)
})