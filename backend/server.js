const app = require('./app.js')
require('dotenv').config();

const dbconnection = require('./config/dbConnection.js')
// Connection database
dbconnection();
const PORT = process.env.PORT || 5001;
// Listening on the port
app.listen(PORT , (req , res) => {
    console.log("Server is Running on port" , PORT);
})