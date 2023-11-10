let createError = require('http-errors');
let express = require('express');

let path = require('path');

const { Server } = require('socket.io');
// let io = new Server(this);

let app = express();

var expressWs = require('express-ws')(app);

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, '../../node_modules')));
let tableList = [];
// tableList[0]={};
// tableList.splice(0);


// io.on('connection',(socket) => {
//     console.log('A user connected ' + socket.id);

// });



app.on('message', function(msg) {
    console.log("Testing with Express-WS");
    console.log(msg);
  });


app.get("/SocketIOChat", (req, res) => {
    res.setHeader('X-Content-Type-Options','nosniff');
    res.sendFile(path.join(__dirname, '../../client/socketIOIndexWS.html'));
});


app.post("/TestBodyPassing", (request,response) => {
    let theBody = request.body;
    console.log(theBody);

    tableList.push(theBody);

    response.send("SEENT!");
});

app.post("/CurrentQueue", (request,response) => {
    let theBody = request.body;
    console.log(theBody);

    tableList.push(theBody);

    let outputTableList = "<div>";


    for(let indx = 0;indx < tableList.length;indx++){
        if(tableList[indx] != undefined){
            outputTableList += "<p>" + tableList[indx].TableName+"</p>";

        }else{
            outputTableList += "<p>" + "undefined"+"</p>";
        }
        
    }

    outputTableList += "</div>";

    //response.send("SEENT!");
    response.send(outputTableList);
});


app.get("/TestHeaderPassing", (request, response) => {
    let x = request.get('Table-Data')// Prints something like:
    //
    // { 'user-agent': 'curl/7.22.0',
    //   host: '127.0.0.1:8000',
    //   accept: '*/*' }
    //console.log(request.headers);;

    console.log(x);
    response.send(`
        <html>
            <head>
            </head>

            <body>
                <h1> ROOT NODE ${x.toString()}</h1>
            </body>
        </html>
    `);
});

app.post("/InsertingTable",(request,response) => {

    let listOfTables = "";

});

app.get("/", (request, response) => {
    let x = "TestValue";

    response.send(`
        <html>
            <head>
            </head>

            <body>
                <h1> ROOT NODE ${x}</h1>
            </body>
        </html>
    `);
});

app.get("/Testing-Home", (request, response) => {
    response.send(`
        <html>
            <head>
            </head>

            <body>
                <h1> Testing-Home </h1>
            </body>
        </html>
    `);
});


app.get("/TableRequest-Get-Request", (request, response) => {
    response.send(`
        <html>
            <head>
            </head>

            <body>
                <h1> TableRequest-Get-Request </h1>
            </body>
        </html>
    `);
});



module.exports = app;