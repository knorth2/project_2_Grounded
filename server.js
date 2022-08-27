const express = require('express')
const app = express()
const Mindful = require('./models/mindful.js')
const methodOverride = require('method-override')

// const session = require('express-session')


// set up access to .env file
require('dotenv').config()

const PORT = process.env.PORT

// //set up session with secret
// const SESSION_SECRET = process.env.SESSION_SECRET
// console.log('Here is the session secret')
// console.log(SESSION_SECRET)

// // use secret
// app.use(session({
// 	secret: SESSION_SECRET,
// 	resave: false, 
// 	saveUninitialized: false 
// }))

// // custom middleware to make currentUser available as
// // a local variable on all ROUTES
// app.use((req, res, next) => {
// 	res.locals.currentUser = req.session.currentUser

// 	// if (req.session.currentUser) {
// 	//   res.locals.authenticated = true
//   //}
// 	next()
// })

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

// const userController = require('./controllers/userController.js')
// app.use('/users', userController)

//default route
app.get('/', (req, res)=>{
    res.redirect("/mindful")
})

app.listen(PORT, ()=>{
    console.log(`Listening on port, ${PORT}🧘🏼‍♀️`)
})