const jwt = require('jsonwebtoken');
const SECRET = 'SECRET';
const jwtauth = (req , res , next) => {
    // Working as a middleware
    const token = (req.cookies && req.cookies.token) || null;
    if(!token){
        return res.status(400).json({
            success : false,
            message : "Authentication Error",
        })
    }
    try{
        const payload = jwt.verify(token , process.env.SECRET || SECRET);
            // Making another entry in the request part
            req.user = {
                id : payload.id,
                email : payload.email,
                username : payload.username
            }
            return next();
    }
    catch(e){
        return res.status(400).json({
            success : false,
            message : `Kuch toh hua h : ${e.message}`
        })
    }
    // Linked list op
    return next();
}
module.exports = jwtauth;

