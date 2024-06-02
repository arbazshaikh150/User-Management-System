const User = require("../model/userSchema");

async function signUp(req , res , next){
    //  Writing the logic for the signUp
    // Which is quite simpler 
    const {name , username , email , password , bio} = req.body;
    //  I can use the params (on sending the data with query)
    if(!name || !username || !email || !password || !bio){
        return res.status(400).json({
            success : false , 
            message : "Every field is required"
        })
    }

    // I can give less priority to bio , but it not an serious issue
    // Email matching is already there in our database
    
    // Creating the user object
    let userExist = await User.findOne({email});
    if(userExist){
        // Also we have a 11000 something code if email is already exist

        return res.status(400).json({
            success : false,
            message : "Email is already exist"
        })
    }

    userExist = await User.findOne({username});
    if(userExist){
        return res.status(400).json({
            success : false,
            message : "UserName is already exist"
        })
    }


    // Saving it into our database.
    // Directly send qki pattern same hai
    try{
        const userInfo = User(req.body);
        const result = await userInfo.save();

        return res.status(200).json({
            success : true ,
            message : "User Created and Stored SuccessFully"
        })
    }
    catch(e){
        return res.status(400).json({
            success : false ,
            message : "User Created and Stored UnsuccessFully"
        })
    }

    
}
module.exports = signUp;