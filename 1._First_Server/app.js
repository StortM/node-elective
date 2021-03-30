const express = require("express");
const app = express();

// to solve the assignment create a datatype to store the data in
// implement the two GET endpoints .. you can hardcode the id for now

app.get("/", (req, res) => {
    res.send({ message: "This is my response"});
});

app.get("/student/id", (req, res) => {
    const id = 1;
    res.send({ id: 1});
});

app.listen(8080); //starts server on port 8080

