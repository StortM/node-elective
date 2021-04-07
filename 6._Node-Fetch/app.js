const express = require("express");
const app = express();

app.use(express.static('public'));

const fetch = require('node-fetch');

// loading node-fetch module and fetch google home page
//as fetch is promise-based we can use .then() to manage response and data from the request
//fetch("https://google.com")
    // wait to receive response from google web server and convert it to text
    //.then(res => res.text())
    // wait for the result of previous reponse and print it to the console
    //.then(text => console.log(text));

app.get("/proxy", (req, res) => {
    fetch("https://google.com")
    .then(res => res.text())
    .then(text => res.send(text));
});

const port = process.env.PORT || 8080;

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", Number(port));
});