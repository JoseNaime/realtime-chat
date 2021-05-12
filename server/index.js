const express = require('express');
const socketIo = require('socket.io');
const http = require('http');

const PORT = process.env.port || 5000;

const router = require('./router')
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('Someone connected to chat !!')

    socket.on('disconnect', () => {
        console.log('User left :c')
    })
});

app.use(router);

server.listen(PORT, () => console.log(`Server started at port: ${PORT}`));

