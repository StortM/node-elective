const express = require("express");
const app = express();

app.use(express.json());

app.listen(8080, error => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});

let animeNames = [
    {
        id: 1,
        title: "Attack on Titan",
        weirdness: 6.8
    },
    {
        id: 2,
        title: "One Punch Man",
        protagonist: "Saitama"
    }
]

let AUTOINCREMENT = animeNames.length + 1;

app.get("/anime_names", (req, res) => {

    res.send({ animeNames: animeNames});
});

app.get("/anime_names/:id", (req, res) => {
    const animeNameId = parseInt(req.params.id);
    const foundAnimeName = animeNames.find(animeName => animeName.id === animeNameId);
    res.send({ data: foundAnimeName })
});

app.post("/anime_names", (req, res) => {
    // get the entity
    const newAnimeName = req.body;
    console.log(newAnimeName);
    // server side giv it an id
    newAnimeName.id = AUTOINCREMENT++;

    // push to db
    animeNames.push(newAnimeName);

    // send it back
    res.send({data: newAnimeName});
});

app.patch("/anime_names/:id", (req, res) => {
    wasupdated = false;

    animeNames = animeNames.map(animeName => {
        if (animeName.id === Number(req.params.id)) {
            // todo update it
            wasupdated = true;
            return animeName = {...animeName, ...req.body, id: animeName.id};
        
        }
        // vigtigt at vi retunerer i tilfælæde af, at vi ikke finder id, da vi ellers overskriver animeName instans med null
        return animeName;
    });
    res.send({ data: wasupdated});
});

app.delete("/anime_names/:id", (req, res) => {
    animeNames = animeNames.filter(animeName => animeName.id !== Number(req.params.id));

    res.send({ data: animeNames})
});