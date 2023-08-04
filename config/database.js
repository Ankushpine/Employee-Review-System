const mongoose = require("mongoose");
require('dotenv').config();

// Connection to mongodb.
mongoose.connect(process.env.MONGO_DB_URL); 

const db = mongoose.connection; // db store the connection

// cheacking the connection
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DATABASE connection is Established");
});

// exporting the connection.
module.exports = db;