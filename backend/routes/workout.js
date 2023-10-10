const express = require('express');
const router = express.Router();

//Used to reference functions that are in the workout controller
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controller/workoutController');


//Getting all workouts
router.get('/', getWorkouts);

//Get a single workout
router.get('/:id', getWorkout)

//Create a new workout
router.post('/', createWorkout);

//Deleting a workout
router.delete('/:id', deleteWorkout);

//Update a workout
router.put('/:id', updateWorkout)

module.exports = router;