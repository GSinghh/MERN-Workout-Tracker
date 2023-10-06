require('dotenv').config();


const express = require('express');

//Express App
const app = express();

//Middleware
app.use('/', (req, res, next) => {
    console.log(req.path, req.method);
})

//Routes
app.get('/', (req, res) => {
    res.json({mssg: "Teri Ma"});
})

app.listen(process.env.PORT, () => {
    console.log('Listening on Port', process.env.PORT);
});