const mongoose = require('mongoose');

//Storing Database Schema
const Schema = mongoose.Schema;

//Workout Schema
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    }
}, { timestamps: true});

//timestamps -> Automatically tracks when document is created/updated

module.exports = mongoose.model("Workout", workoutSchema);