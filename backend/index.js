const { Server } = require('socket.io');
// Created http server from the express app.
const httpServer = require("http").createServer(require('./Src/app'));


// Wrapped express http server with socket.io server
const io = new Server(httpServer, {
    cors: {
        origin: process.env.ORIGIN,
        credentials: true
    }
});

// Http server listening to the port
const PORT = process.env.PORT || 5000
httpServer.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Starting localhost server at port: ${PORT}`)
});
