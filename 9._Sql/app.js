let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost", 
    user: "root",
    password: "Uhk43cdd\"",
    database: "nordic_motorhome_rental"
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

connection.query("SELECT 1 + 1 AS solution", (error, results, fields) => {
    if(error) throw error;
    console.log("The solution is ", results[0].solution);
});

connection.end();