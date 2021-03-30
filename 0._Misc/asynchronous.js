// asynchronous code why?
// to avoid blicking i/o 
// bacause JS is single threaded

// asynchronous code when?
// Requests 
// Database 
// User input 
// Files 

// promises
// can be in two states
// pending - still running
// fulfilled 
    // resolved or rejected

new Promise((resolve, reject) => {
    setTimeout( () => {
        resolve("I'm so happy");
    }, 4000);
}).then(message => {
    console.log(message);
});


function myPromise() {
    return new Promise ((resolve, reject) => {
        try{
            setTimeout(() => {
                resolve("The motochondria is the power house of the cell");
            }, 5000);
        } 
        catch {
            reject("Every promise dont work out this way");
        }
    });
}

myPromise()
.then(message => console.log(message));

// async / await
async function myAsynchronousFunction() {
    try{
        const message = await myPromise();
    console.log(message);
    }
    catch (errorMessage) {
        console.log(errorMessage);
    }
}

myAsynchronousFunction();