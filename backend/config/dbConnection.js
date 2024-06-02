const mongoose = require('mongoose');

// Agar user ne kuch au bheja toh ignore kar dega
mongoose.set('strictQuery', false);

const connectToDb = async () => {
    // In try and catch
    try{
        const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/user-management';
        // Connection of db
        // .env url
        const {connection } = await mongoose.connect(
            // Konsa url hai
            MONGO_URI
        )
        // console.log(connection);
        if(connection){
            console.log("Connection Established" ,  MONGO_URI);
        }
    }
    catch(e){
        console.log(e);
        // Database hi nhi connect hai toh yahi band kar do
        process.exit(1);
    }
}

module.exports = connectToDb;