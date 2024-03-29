# GymGuru (Workout Tracker)

### [Deployment Link 🚀](https://gymtime-workout-tracker.vercel.app)

This workout tracker is perfect for the avid gym goer who wants to keep track of their workouts and observe their progression day by day.

# Preview
![view 1](frontend/public/Workout-Tracker-Preview.png)

# Features
1. User-friendly interface that allows easy navigation 
2. Allows inputting of Workout information (Sets, reps, weight)
3. Login, Logout, Sign Up functionality

# Upcoming Features 
These are some features that I would like to implement in the future:
- [ ] Add dropdown menu that shows previous workouts in add workout section
- [ ] Add in chart/analytics for each workout for users to see progression
- [ ] Allow users to add in profile picture
- [ ] Create a calendar for users to see what workout was done what day

# Built With
- MongoDB
- Express
- Node
- React

# Getting Started

Assuming you have npm installed, you will need to:

1. Clone this project:  
   `git clone https://github.com/GSinghh/MERN-Workout-Tracker.git`

2. Change into repository directory:<br>
   `cd MERN-Workout-Tracker` 

3. Once you have cloned this project, you can install the required dependencies by using:  
   `npm install`

4. Create a .env file and give each of these variables below a value:<br>
   `MONGO_URI`:  MongoDB Database URL <br>
   `PORT`:  Port number to start the server on <br>
   `SECRET`: Used to sign JSON Web Token
6. Once all the enviroment variables are set, you can start up the backend with: <br>
   `npm run start`
7. There are multiple files in the frontend folder (Home.js, useSignup.js, useLogin.js), each of these files makes a fetch request. Within this request, the url will need to be changed to either localhost, if you plan on hosting on your computer,  or the url for where your backend is hosted.
8. The frontend should then be ready, you can start it up with: <br>
`npm run start`
9. Enjoy! 



---
<div align = 'center'>Developed by Gurpreet Singh Bassan</div>
