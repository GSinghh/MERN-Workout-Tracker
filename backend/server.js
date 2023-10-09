require('dotenv').config();


const express = require('express');
const workoutRoutes = require('./routes/workout')
//Express App
const app = express();

//Middleware
app.use('/', (req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//Routes
app.use('/api/workouts/', workoutRoutes);

app.listen(process.env.PORT, () => {
    console.log('Listening on Port', process.env.PORT);
});