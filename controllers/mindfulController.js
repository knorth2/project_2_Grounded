const express = require('express');
const router = express.Router()
const Mindful = require('../models/mindful.js')
const multer = require('multer');

//how to make home??
router.get('/', (req, res) => {
	res.render('home.ejs');
});

//index route
router.get('/index', async (req, res) => {
	let mindful = await Mindful.find({});
	res.render('index.ejs', { mindful });
});

// // SEED
// router.get('/seed', (req, res) => {
// 	Mindful.create(
// 		[
// 			{
//                 date: 'August 18, 2022',
// 				   name: 'Hike with my dogs',
//                 beforeActivity: 'anxious',
//                 afterActivity: 'determined/calm',
//                 water: 72,
//                 sleep: 9,
//                 postiveEvent: 'Decided on my project subject',
// 			},
//             {
//                 date: 'August 19, 2022',
// 				   name: 'yoga and belly breathing',
//                 beforeActivity: 'anxious',
//                 afterActivity: 'determined',
//                 water: 50,
//                 sleep: 7,
//                 postiveEvent: 'finished my homework before project proposal',
// 			},
			
// 		],
// 		(err, data) => {
// 			res.redirect('/mindful');
// 		}
// 	);
// });

// NEW
router.get('/new', (req, res) => {
	res.render('new.ejs');
});

  //show route
  router.get('/:id', async(req, res)=>{  
    const mindful = await Mindful.findById(req.params.id)
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
            res.redirect('/mindful/index')
        }
        
    })
})

//upload photo
const Storage = multer.diskStorage({   //access both the file and the body
     dest: 'uploads',           //this tells it to create uploads folder to store files
     filename: (req, file, cb)=>{
        cb(null, file.myPic)
     }
    })
const upload = multer({
    storage:Storage
})

router.post('/pin', upload.single('myPic'), (req, res)=>{ //use name field value on the form so multer knows while field on the request it should look for the files in
    const newPin = new Mindful({
        date: req.body.date,
        beforeMovement: req.body.beforeMovement,
        water: req.body.water,
        sleep: req.body.sleep,
        movement: req.body.movement,
        afterMovement: req.body.afterMovement,
        positiveEvent: req.body.positiveEvent,
        myPic: req.file.filename,   
    })
    newPin.save(() =>{
        if (error){
            console.log(error)
        }else{
            res.redirect('pin')
            console.log(req.file.filename)
        }
    })
})      

//Delete route
router.delete('/:id', (req, res)=>{
    Mindful.findByIdAndRemove(req.params.id, (error, data)=>{
      if(error)console.log(error)
      res.redirect('/mindful/index')
    })
  })

  // EDIT
router.get('/:id/edit', (req, res) => {
	Mindful.findById(req.params.id, (err, data) => {
		res.render('edit.ejs', {mindful: data})
	})
})

// UPDATE
router.put('/:id', (req, res) => {
	Mindful.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, data) => {
        const update = req.params.id
		res.redirect('/mindful/' + update)
	})
})





module.exports = router