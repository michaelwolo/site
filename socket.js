module.exports = function socket(io) {
  io.on('connection', function (socket) {
    console.log('Connection made!');

    socket.on('disconnect', function () {
      console.log('Disconnected!');
    });
  });
}
