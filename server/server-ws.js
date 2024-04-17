//var app = require('../server/config/app');
var app = require('../server/config/app-ws');
var http = require('http');

const { Server } = require('socket.io');


var port = normalizePort(process.env.PORT || '3000');

app.set('port',port);

var server = http.createServer(app);


server.listen(port);
server.on('error', onError);
server.on('listening', onListening);



let io = new Server(server, {
  connectionStateRecovery: {}
});


io.on('connection',(socket) => {
  console.log('A user connected ' + socket.id);

  /* 
    Tutorial #5 Broadcasting to conected sockets.
  */
  socket.broadcast.emit('connection','Hello '+ socket.id);

  socket.on('disconnect',() =>{
    console.log('A user disconnected '+ socket.id);

    // Tutrl #5
    socket.broadcast.emit('Good Bye ' + socket.id);
  });

  /* 
    Tutorial #4 Listening of sent events from the client.
  */

    socket.on('chat message', (msg) => {
        console.log('Message: ' + msg);

        // Tutrl #5
        io.emit('chat message', socket.id + " said: " +msg);
    });


});

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
      console.debug('Listening on ' + bind);
    //debug('Listening on ' + bind);
  }