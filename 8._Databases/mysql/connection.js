require("dotenv").config();

let mysql = require("mysql");

let connection = mysql.createConnection({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB
});

// node connection.js --createdb
connection.connect();

if (process.argv.includes("--createdb")){
    console.log("Creation mode activated");
}

