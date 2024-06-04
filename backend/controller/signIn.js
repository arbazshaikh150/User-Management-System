const User = require("../model/userSchema");
const bcrypt = require('bcryptjs');

async function signIn(req , res , next){
    try{
        
        const {username , password} = req.body;

        if(!username || !password){
            return res.status(400).json({
                success : false,
                message : "Please Fill all the details"
            })
        }

        //  Geting the actual user from database and compare 
        // we have to use navigate and all
        // First creating our database
        const user = await User.findOne({username}).select("+password");

        if(!user){
            return res.status(400).json({
                success : false,
                message : "User Not Exist",
            })
        }

        // Bcrypted password
        // We can also use crypto for encrypting and decrypting
        const correctPassword = await bcrypt.compare(password , user.password);
        if(!correctPassword){
            return res.status(400).json({
                success : false ,
                message : "Password Doesn't Match"
            })
        }

        // Create jwt token using userSchema method( jwtToken() )
        const token = user.jwtToken();
        user.password = undefined;

        const cookieOption = {
        maxAge: 24 * 60 * 60 * 1000, //24hr
        httpOnly: true //  not able to modify  the cookie in client side
        };

        res.cookie("token", token, cookieOption);
        
        // Everything is fine now 
        // Redirecting it to the main profile page
        // Navigating is done from frontend side
        return res.status(200).json({
            success : true ,
            message : "Logged In SuccessFully"
        })
    }
    catch(e){
        return res.status(400).json({
            success : false,
            message : e.message
        })
    }

}
module.exports = signIn;