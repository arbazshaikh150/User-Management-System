const { Router } = require("express");
const signIn = require("../controller/signIn");
const signUp = require("../controller/signUp");
const profile = require("../controller/profile");

// Instance of routing
const router = Router();

// Path 
// Controller
router.post('/signin' , signIn);
router.post('/signup' , signUp);
router.get('/profile', profile); 


module.exports =  router;