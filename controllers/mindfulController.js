const express = require('express');
const router = express.Router()
const Mindful = require('../models/mindful.js')

//index route
router.get('/', async (req, res) => {
	let mindful = await Mindful.find({});
	res.render('index.ejs', { mindful });
});

// SEED
router.get('/seed', (req, res) => {
	Mindful.create(
		[
			{
                date: 'August 18, 2022',
				name: 'Hike with my dogs',
                beforeActivity: 'anxious',
                afterActivity: 'determined/calm',
                water: 72,
                sleep: 9,
                postive: 'Decided on my project subject',
			},
            {
                date: 'August 19, 2022',
				name: 'yoga and belly breathing',
                beforeActivity: 'anxious',
                afterActivity: 'determined',
                water: 50,
                sleep: 7,
                postive: 'finished my homework before project proposal',
			},
			
		],
		(err, data) => {
			res.redirect('/mindful');
		}
	);
});

// NEW
router.get('/new', (req, res) => {
	res.render('new.ejs');
});



module.exports = router