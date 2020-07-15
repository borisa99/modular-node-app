const { sendMessage } = require('./actions');

module.exports = function (io) {
  io.on('connection', (socket) => {
    console.log('New WS Connection...');

    socket.on('disconnect', () => {
      io.emit('message', sendMessage('User has left'));

    });

    //Listen for btn Message
    socket.on('btnMessage', (msg) => {
      socket.emit(
        'message',
        sendMessage(' Server says: "You have clicked emit button"')
      );
    });
  });
};
