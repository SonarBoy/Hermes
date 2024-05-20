var app = require('../server/config/app');
var http = require('http');

const { Server } = require('socket.io');


var port = normalizePort(process.env.PORT || '3000');

app.set('port',port);

var server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


/* 
  Tutorial #3 Setup and what to do on specific events.

  Tutorial #5 adding connectionStateRecovery to rebroadcast missed events
  note socket.io does not store events but this can save some of them.

  Why its not used all the time 
  it doesn't always work, for example if the server abruptly crashes or gets restarted, then the client state might not be saved
  it is not always possible to enable this feature when scaling up

*/
let io = new Server(server, {
  connectionStateRecovery: {},
  cors: {
    origins: ['http://localhost:4200/'],
    methods: ["GET", "POST"]
}
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