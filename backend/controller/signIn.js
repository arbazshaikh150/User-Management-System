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

        // Setting the token
        const token = user.jwtToken();
        user.password = undefined;

        const cookieoption = {
            /// in millisecond
            maxAge : 24 * 60 * 60 * 1000, 
            httponly : true, /// cient side se access nhi ho sakti
        }

        // Saving it in our cookie
        res.cookie('token' , token , cookieoption);
        
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