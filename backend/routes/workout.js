const express = require('express');

const router = express.Router();

//Getting all workouts
router.get('/', (req, res) =>{
    res.json({mssg: 'GET all workouts'});
});

router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single workout'});
})

//Create a new workout
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new workout'});
})

//Deleting a workout
router.delete('/:id', (req, res) =>{
    res.json({mssg: 'DELETE a workout'});
});

//Update a workout
router.put('/:id', (req, res) => {
    res.json({mssg: 'Updating a workout'});
});

module.exports = router;