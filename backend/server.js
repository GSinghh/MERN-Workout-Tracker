require('dotenv').config();


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const workoutRoutes = require('./routes/workout')
const userRoutes = require('./routes/user')
//Express App
const app = express();

//Middleware
app.use(express.json());

app.use(cors());

app.use('/', (req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//Routes
app.use('/api/workouts/', workoutRoutes);
app.use('/login', userRoutes);

//Database Connection
//Only start the server once the database connection is established
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB & Listening on Port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    })

