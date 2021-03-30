const express = require("express");
const app = express();


// fortæller at app skal bruge den nedenstående json parser
app.use(express.json());

/*
// How do we send data in a GET request?
// modify the URL so you are sending today as the path variable
// and your name as the query string with the variable name "name"

// not int he  assignment.. but perhaps it will say: It's Thursday: Anders 

app.get("/day/today?name=Michael", (req, res) => {
    res.send({})
});

// create a route called querystring that returns an empty json
// for now call it in your browser while giving it a query string


// give it the query string value: the best value
// and return it to the client

app.get("/querystring", (req, res) => {
    res.send(req.query)
});

// pathvariable way
app.get("/pathvariable/:message/:title", (req, res) => {
    res.send({ 
        message: req.params.message, 
        title: req.params.title 
    });
});

// we are still working with path variables
// in the same route as above, give it a title
// return the message with the title to the client

// solution: See above

app.post("/whatever", (req, res) => {
    console.log(req.body);
    res.send({ body: req.body });
});

*/

// gamers object to use in memory
const gamers = {
    1: {
        name: 'shoota',
        game: 'CS GO',
        ELO: '1450',
        age: '21'      
    },
    2: {
        name: 'easyGoingBob',
        game: 'chess',
        ELO: '1800',
        age: '55'      
    },
    3: {
        name: 'misterBrown',
        game: 'league of legends',
        ELO: '2600',
        age: '25'      
    },
    4: {
        name: 'wetTowel',
        game: 'CS GO',
        ELO: '1500',
        age: '28'      
    },
  }

  
app.get("/gamers/:id", (req, res) => {
    const gamer = gamers[req.params.id];

    if (!gamer) {
        return res.sendStatus(404);
    }
    res.json(gamer)
});

app.post("/gamers", (req, res) => {
    const { name, game, ELO, age } = req.body;

    if (!name || !game || !ELO || !age) {
        return res.status(400).send("Din request mangler noget, makker")
    }

    const id = Object.keys(gamers).length + 1;

    // sætter det hele explicit, da jeg endnu ikke tjekker om user sender uønskede parametre
    gamers[id] = { name, game, ELO, age };

    res.sendStatus(200);
});

app.delete("/gamers/:id", (req, res) => {
    const gamer = gamers[req.params.id];

    if (!gamer) {
        return res.sendStatus(404);
    }

    delete gamers[req.params.id];

    res.sendStatus(200);
});

app.put("/gamers/:id", (req, res) => {
    const gamer = gamers[req.params.id];

    // tjekker om gamer findes
    if (!gamer) {
        return res.sendStatus(404).send("Gamer ikke fundet");
    }

    const { name, game, ELO, age } = req.body;

    if (!name || !game || !ELO || !age) {
        return res.status(400).send("Din request mangler noget, makker")
    }

    gamers[req.params.id] = { name, game, ELO, age };

    res.sendStatus(200);
});

const wine = require("./wine.json");


app.listen(8080, error => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});


