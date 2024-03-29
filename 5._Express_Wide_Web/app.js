const express = require("express");
const app = express();

app.use(express.static('public'));

const fetch = require('node-fetch');


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/welcome/welcome.html");
});

app.get("/pizza", (req, res) => {
    res.sendFile(__dirname + "/public/pizzaparlor.html");
});

app.get("/whiskey", (req, res) => {
    res.send({ barkeep: "Here ya go, pal. A whiskey for you." });
});

app.get("/pub", (req, res) => {
    if (Number(req.query.money) > 500) {
        res.redirect("/whiskey");
    } else {
        res.send({ doorman: "Sorry, you don't have money for whiskey." });
    }
});

app.get("/candle", (req, res) => {
    if (req.query.blow) {
        return res.send({ lightsOn: false });
    }
    res.send({ lightsOn: true });
});

app.get("/catfacts", (req, res) => {
    res.sendFile(__dirname + "/public/catfacts/catfacts.html");
});

app.get("/proxy", (req, res) => {
    fetch("https://google.com")
    .then(res => res.textConverted())
    .then(text => res.send(text))
    .catch(err => console.log(err));
});

const port = process.env.PORT || 8080;

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", Number(port));
});