// create an express server
const express = require("express");
const app = express();

const server = require("http").createServer(app);

const io = require("socket.io")(server);

io.on("connection", (socket) => {
    //console.log("A socket connected with id ", socket.id);

    socket.on("colorChanged", (data) => {
        
        // below line changes all windows color
        //io.emit("changeBackgroundToThisColor", data);
        
        // changes just itself
        // socket.emit("changeBackgroundToThisColor", data)

        // changes the color for all the sockets except itself
        socket.broadcast.emit("changeBackgroundToThisColor", data);
    });
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/colors.html");
})



const port = process.env.PORT || 8080;

server.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", Number(port));
});
