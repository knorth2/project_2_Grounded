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
				activityName: 'Hike with my dogs',
                stateOfMindBeforeActivity: 'anxious',
                stateOfMindAfterActivity: 'determined/calm',
                waterConsumption: 72,
                hoursSlept: 9,
                postiveOccuranceOfTheDay: 'Decided on my project subject',
			},
            {
                date: 'August 19, 2022',
				activityName: 'yoga and belly breathing',
                stateOfMindBeforeActivity: 'anxious',
                stateOfMindAfterActivity: 'determined',
                waterConsumption: 50,
                hoursSlept: 7,
                postiveOccuranceOfTheDay: 'finished my homework before project proposal',
			},
			
		],
		(err, data) => {
			res.redirect('/mindful');
		}
	);
});



module.exports = router