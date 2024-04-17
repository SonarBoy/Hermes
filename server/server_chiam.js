const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);

let users = [];
const user = {
    username,
    id: socket.id
};

const payload = {
    content,
    chatName,
    sender,
};

server.listen(4044, () => console.log("Server is running on port 4044"));

io.on('connection', socket => {

    socket.on("join server", (username) => {
    
        users.push(user);
        io.emit("new user", users);
    });

    socket.on("join room", (roomName, cb) => {
        socket.join(roomName);
        cb(messages[roomName]);
        socket.emit("joined",messages[roomName]);
    });


    socket.on("send message",({content, to, sender,chatName, isChannel}) => {

        if(isChannel){
            socket.to(to).emit("new message",payload);
        }else{

            const payload2 = {
                content,
                chatName: sender,
                sender,
            };

            socket.to(to).emit("new message",payload2);
        }

        if(messages[chatName]){
            messages[chatName].push({
                sender,
                content
            })
        }
    });

    socket.on("disconnect",() => {
        users.filter(u => u.id !== socket.id);
        io.emit("new user",users);
    });

});