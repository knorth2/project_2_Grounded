const express = require('express');
const router = express.Router()
const Mindful = require('../models/mindful.js')

//index route
router.get('/', async (req, res) => {
	let mindful = await Mindful.find({});
    console.log(mindful)
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
                postiveEvent: 'finished my homework before project proposal',
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

  //show route
  router.get('/:id', async(req, res)=>{
    const mindful = await Mindful.findById(req.params.id)
    console.log(mindful)
    res.render('show.ejs', {
        mindful: mindful
    })
})

//create
router.post('/', (req, res)=>{
    Mindful.create(req.body, (error, data)=>{
        if (error){
            console.log('error', error)
        }else{
            res.redirect('/mindful')
        }
    })
})

//Delete route
router.delete('/:id', (req, res)=>{
    Mindful.findByIdAndRemove(req.params.id, (error, data)=>{
      if(error)console.log(error)
      res.redirect('/mindful')
    })
  })



module.exports = router