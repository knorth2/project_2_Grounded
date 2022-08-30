const express = require("express");
const router = express.Router();
const Mindful = require("../models/mindful.js");
// get user model 
const User = require("../models/users.js")

// custom middleware to require authentication on routes
const authRequired = (req, res, next) => {
	if(req.session.currentUser){
		// a user is signed in
		next()
	} else {
		res.send("You must be logged in to do that!")
		// res.redirect('/user/signin')
	}
}

//how to make home??
router.get("/",  (req, res) => {
  res.render("home.ejs");
});

//index route
router.get("/index", authRequired, async (req, res) => {
  let mindful = await Mindful.find({});
  res.render("index.ejs", { mindful });
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
router.get("/new", authRequired, (req, res) => {
  res.render("new.ejs");
});

//show route
router.get("/:id", async (req, res) => {
  const mindful = await Mindful.findById(req.params.id);
  res.render("show.ejs", {
    mindful: mindful,
  });
});

//create
router.post("/", (req, res) => {
  req.body._creator = req.session.currentUser._id
  console.log(req.body)
  Mindful.create(req.body, (error, createdMindful) => {
    if (error) {
      console.log("error", error);
    } else {
      // now lets add this mindful event to the user side...
			User.findOne({username: req.session.currentUser.username}, (err, foundUser) => {
				if (foundUser) {
					console.log(foundUser)
					foundUser.ownedMindful.push(createdMindful)
					foundUser.save()
				}
			})
      res.redirect("/mindful/index");
    }
  });
});


//Delete route
router.delete("/:id", (req, res) => {
  Mindful.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) console.log(error);
    res.redirect("/mindful/index");
  });
});

// EDIT
router.get("/:id/edit", authRequired, (req, res) => {
  Mindful.findById(req.params.id, (err, data) => {
    res.render("edit.ejs", { mindful: data });
  });
});

// UPDATE
router.put("/:id", (req, res) => {
  Mindful.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, data) => {
      const update = req.params.id;
      res.redirect("/mindful/" + update);
    }
  );
});

module.exports = router;
