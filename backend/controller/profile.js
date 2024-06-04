const User = require('../model/userSchema');
async function profile(req , res , next){
    // Fetching from the url
    // Hamare pass jwt token hai na ham middleware bana lenge
    const {id} = req.user.id;

    // Database searching
    try{
        const user = await User.findOne({id});
        // Not getting the passWord
        return res.status(200).json({
            success : true ,
            message : 'Got User Details SuccessFully',
            user : user,
        })
    }
    catch(e){
        res.status(400).json({
            success : false,
            message : 'Invalid Username',
        })
    }

}
module.exports = profile;