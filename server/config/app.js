let createError = require('http-errors');
let express = require('express');

let path = require('path');

const { Server } = require('socket.io');
// let io = new Server(this);

let app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
let tableList = [];
// tableList[0]={};
// tableList.splice(0);
app.use(express.static(path.join(__dirname, '../../client')));
app.use(express.static(path.join(__dirname, '../../client/css')));


let printQueue = function(){

    for(let indx = 0;indx < tableList.length;indx++){
        if(tableList[indx] != undefined){
            //outputTableList += "<p>" + tableList[indx].TableName+"</p>";

            console.log(tableList[indx].TableName + " " + tableList[indx].Req);

        }else{
            //outputTableList += "<p>" + "undefined"+"</p>";
        }
        
    }

    return;
}



let queueInsertingFunction = function(insertingData){

    console.log("Queue Inserting: " + insertingData.TableName);
    //console.log(tableList.findIndex((element) => { return element.TableName == tableReq}));

    let tableReq = insertingData.TableName;

    let indx = tableList.findIndex((element) => { return element.TableName == tableReq});
    
    if(indx != -1 ){
        if(!tableList[indx].Req.includes(insertingData.Req)){
            tableList[indx].Req += "|" + insertingData.Req;
        }
    }else{
        tableList.push(insertingData);
    }

    



    //console.log("Body: " + JSON.stringify(body.findIndex(isTable1)).toString());
}

// io.on('connection',(socket) => {
//     console.log('A user connected ' + socket.id);

// });

app.get("/SocketIOChat", (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/socketIOIndex.html'));
});


app.get("/FrontEndTesting-Home", (req, res) => {
    //res.sendFile(path.join(__dirname, '../../client/testerHTML.html'));
    res.sendFile(path.join(__dirname, '../../client/tableRequest.html'));
});


app.post("/TestBodyPassing", (request,response) => {
    let theBody = request.body;

    console.log("Body Request: " + JSON.stringify(theBody).toString());
    queueInsertingFunction(request.body);

    //tableList.push(theBody);

    printQueue();
    response.send("SEENT!");
});






app.post("/CurrentQueue", (request,response) => {
    let theBody = request.body;
    console.log(JSON.stringify(theBody).toString());

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