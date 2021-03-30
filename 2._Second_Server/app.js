const express = require("express");
const app = express();

// send back empty Json
app.get("/", (req, res) => {
    // send an empty json as response?
    res.send({});
});

// Create a route on the endpoint me which sends back a json that represents you
app.get("/me", (req, res) => {
    const myInfo = {
        firstname: "Michael",
        lastname: "Fuglø",
        age: 24,
        country: "Denmark"
    };
    res.send(myInfo);
});

app.listen(8080);
// get time
app.get("/time", (req, res) => {
    //time string
    const timeString = new Date().toLocaleTimeString('en-GB', { hour: "numeric", minute: "numeric", second: "numeric"});
        
    res.send({time: timeString});
});

// get day
app.get("/day", (req, res) => {
    //date string
    const todaysDay = new Date().toLocaleString("dk-DK", {weekday: 'long'});
        
    res.send({day: todaysDay});
});

// get month
app.get("/month", (req, res) => {
    //month string
    const todaysMonth = new Date().toLocaleString('dk-DK', { month: 'long' });
        
    res.send({month: todaysMonth});
});

//about which gives me a version of this API in a string
app.get("/about", (req, res) => {
    res.send({version: "0.0.1"})
});