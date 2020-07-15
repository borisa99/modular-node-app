const emitBtn = document.getElementById('emit-btn');

const socket = io();

socket.on('message', (data) => {
  console.log(data);
});

emitBtn.addEventListener('click', (e) => {
  socket.emit('btnMessage', 'Emit button has been clicked');
});
