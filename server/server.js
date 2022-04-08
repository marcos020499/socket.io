const express = require("express");
const http =require("http");
const app = express();
const server = http.createServer(app);

const socketio = require("socket.io");
const io = socketio(server);

io.on("connection", socket=>{
    socket.on("conectado", ()=>{
        console.log("usuario creado")
    })
});
server.listen(8080, ()=> console.log("servidor incializado"))