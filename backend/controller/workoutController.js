const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

//POST -> Creating new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body;

    const errorMessages = []

    if(!title)
        errorMessages.push('title')
    
    if(!load)
        errorMessages.push('load')
    
    if(!reps)
        errorMessages.push('reps')
    
    if(errorMessages.length > 0)
    {
        return res.status(400).json({error : 'Please fill in all fields'}, errorMessages)
    }
    

    try {
        const workout = await Workout.create({title, load, reps});
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

//GET -> Getting all workouts
const getWorkouts = async (req, res) => {

    //Grabbing all workouts from DB and sorting them in reverse order
    const workout = await Workout.find({}).sort({createdAt : -1});
    res.status(200).json(workout);
}

//GET -> Getting a workout by id
const getWorkout = async (req, res) => {
   
    //Destructing to grab ID from request parameters
    const { id } = req.params;

    //Validating if ID is valid
    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).json({error: 'Not Valid ID'})

    //Grabbing workout from DB
    const workout = await Workout.findById(id);

    //If workout is not found, return 404 else return Workout
    if(!workout)
        return res.status(404).json({error: 'Workout Not Found'});
    
    res.status(200).json(workout);
}

const deleteWorkout = async (req, res) => {
   
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).json({error: 'Not Valid ID'});

    const workout = await Workout.findByIdAndDelete({_id : id});

    if(!workout)
        return res.status(400).json({error: 'Workout Not Found'});

    res.status(200).json(workout);


}


const updateWorkout = async (req, res) => {

    //Destructing to grab ID from request parameters
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).json({error: 'Not Valid ID'});

    const workout = await Workout.findOneAndUpdate({_id : id}, {
        ...req.body
    })

    if(!workout)
        return res.status(400).json({error: 'Workout Not Found'});

    res.status(200).json(workout)
};

//Exporting each controller method for use in routes file
module.exports = {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
};