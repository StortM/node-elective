const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "beer";

MongoClient.connect(url, { useUnifiedTopology: true }, (error, client) => {
    if (error){
        throw new Error(error);
    }

    const db = client.db(dbName);
    const breweries = db.collection("breweries");

    breweries.insertOne({ name: 'Best beer', type: 'IPA' }, (error, data) => {
        if (error) {
            throw new Error(error);
        }   
        
        console.log("Inserted amount: " + result.insertedCount);
        client.close();
    })
});

