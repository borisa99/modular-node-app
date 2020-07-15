const http = require('http');
const path = require('path');
const express = require('express');
const cors = require('cors');
const baseRouter = require('./Routes/_init');

const app = express();
const server = http.createServer(app);

//Setting Static assets
app.use(express.static(path.join(__dirname, 'Client')));

//Built in middleware
app.use(cors());
app.use(express.json());

//Intializing all Routers
baseRouter(app);

//Connecting to DB

//initializing Socket.io
const io = require('socket.io')(server);
require('./AddOns/SocketIO/index')(io);

const PORT = process.env.port || 5000;
server.listen(PORT, () => {
  console.log(`App started at the port: ${PORT}`);
});
