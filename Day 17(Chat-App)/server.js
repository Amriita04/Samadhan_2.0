const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// App setup
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from "public"
app.use(express.static('public'));

// Socket.io connection
io.on('connection', (socket) => {
    console.log(`🔌 User connected: ${socket.id}`);

    socket.on('chat message', (msg) => {
        console.log(`📩 Message: ${msg}`);
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log(`❌ User disconnected: ${socket.id}`);
    });
});

// Start server
server.listen(3000, () => {
    console.log('✅ Server running at http://localhost:3000');
});
