//var app = require('../server/config/app');
var app = require('../server/config/app-ws');
var http = require('http');
var setupRestraunt = require("../server/RestrauntQueue.js");

const { Server } = require('socket.io');


var port = normalizePort(process.env.PORT || '3000');

app.set('port',port);

var server = http.createServer(app);


server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


let recievedQueries = [];


/* function Apple(property){
  var color = property.color; //instance variable
  this.getColor = function(){
    return color;
 };  
}
Apple.type = "fruit"; //class variable

var redApple = new Apple({color:'red'});
var greenApple = new Apple({color:'green'});  */




let printOut = function(){
  console.log("===============List Print Out================");
  console.log("=============================================");
  for(let indx = 0; indx < recievedQueries.length; indx++){
    console.log("Current Item: " + indx);
    console.log("Current Restraunt ID: " + recievedQueries[indx].restrauntId);
    console.log("Current Section ID: " + recievedQueries[indx].sectionId);
    console.log("Current Table ID: " + recievedQueries[indx].tableId);
    console.log("=============================================");
  }
}


let io = new Server(server, {
  connectionStateRecovery: {},
  cors: {
    origins: ['http://localhost:4200/'],
    methods: ["GET", "POST"]
},pingInterval: 100000,
pingTimeout: 90000
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

        console.log('Restraunt ID: ' + msg.restrauntId);
        console.log('Section ID: ' + msg.sectionId);
        console.log('Table ID: ' + msg.tableId);


        let query = new setupRestraunt.TableQuery();

        
        query.restrauntId = msg.restrauntId;
        query.sectionId = msg.sectionId;
        query.tableId = msg.tableId;

        recievedQueries.push(query);

        //TODO : Removed from testing for now
       // printOut();

        // Tutrl #5 //TODO Put back to send message back 
        //io.emit('chat message', socket.id + " said: " +msg);

        // TODO Simple function emmit
        /*io.emit('broadcastingToWaiterTermial', (recievedQueries) => {
          
          callback({
            recieved: "ok"
          });
          
          console.log("Log Out");
        });*/


        

        io.emit('broadcastingToWaiterTermial', JSON.stringify({currentQueue: recievedQueries}));
    });

    socket.on('DeleteTable',(msg) => {

      console.log("Deletion Deletion Deleteion");
      console.log('Restraunt ID: ' + msg.restrauntId);
      console.log('Section ID: ' + msg.sectionId);
      console.log('Table ID: ' + msg.tableId);

      for(let x = 0; x < recievedQueries.length; x++){
        
        if(recievedQueries[x].sectionId == msg.sectionId && recievedQueries[x].tableId == msg.tableId){
          recievedQueries.splice(x, 1);
        }
        
      }

      io.emit('broadcastingToWaiterTermial', JSON.stringify({currentQueue: recievedQueries}));
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
