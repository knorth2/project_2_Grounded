const express = require("express");
const router = express.Router();
const Mindful = require("../models/mindful.js");


//how to make home??
router.get("/", (req, res) => {
  res.redirect("home.ejs");
});

//index route
router.get("/index", async (req, res) => {
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
router.get("/new", (req, res) => {
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
  Mindful.create(req.body, (error, data) => {
    if (error) {
      console.log("error", error);
    } else {
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
router.get("/:id/edit", (req, res) => {
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
