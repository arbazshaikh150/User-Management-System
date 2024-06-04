// Creating the react instance
const cookieParser = require('cookie-parser');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const customRoutes = require('./routes/customRoutes.js')

// Instance of express
const app = express();
const FRONTEND_URL = "http://localhost:5173"
// For stringify
// Normal middlewares
app.use(express.json());
// Cookies se directly le sakte hai , joh bhi beech kaa kaam hai woh yeh dekh lega
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.urlencoded({extended : true}));
app.use(cors({
    origin : [FRONTEND_URL],
    credentials : true
}));

// Routes
// routes starting with /api/auth
app.use('/api/auth' , customRoutes);
app.use('*' , (req , res) => {
    res.status(400).json({
        success : false ,
        message : "OOPS , 404 PAGE NOT FOUND !"
    })
})

module.exports = app;