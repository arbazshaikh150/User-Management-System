const app = require('./app.js')
const dbconnection = require('./config/dbConnection.js')
// Connection database
dbconnection();
const PORT = 5000;
// Listening on the port
app.listen(PORT , (req , res) => {
    console.log("Server is Running on port" , PORT);
})