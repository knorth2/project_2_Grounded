# Mindful: Full Stack Application
## Project Discription
Mindful is a daily journal entry app that tracks activity and mindfulness to hopefully redirect your thoughts on a more positive path. It is a working full-stack application using:
* Node.js
* Mongoose
* Express
* EJS 
* and has 7 RESTful routes and full CRUD.


https://mindful-deploy-app.herokuapp.com/mindful

Some issues that I would like to work on include:
* sessions isn't saving to usernames so all the posts show on the index route. The conditional I was using was causing some issues in heroku.
* Continue to style the page further.

# Wireframes

![Screen Shot 2022-08-20 at 10 25 56 AM (2)](https://user-images.githubusercontent.com/106217931/187575917-7136b0c0-ec35-4ca1-be2d-05aabba8939d.png)


# User Stories


As a user, I want to be able to track how my mind is processing the days ins and outs and see how I can approve my mindfulness. I want to have a place to jot down how I am feeling before and after activity and recall something positive to help redirect my mind during times of stress.

## MVP Goals
As a user, I want :

* to ADD/CREATE a post that tracks my mindfulness and activity for the day
* to EDIT my post with updates throughout the day
* to DELETE a post if it doesn't coincide with my day accurately
* to GET my progress, revisit my index page of events from the previous days/weeks

## Stretch Goals
As a user, I want:

* to ADD a photo from my activity of choosing to help remember the day using POST /pins/ route
* to POST a user account so I can track my progress (by using sessions).
