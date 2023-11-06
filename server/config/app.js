let createError = require('http-errors');
let express = require('express');
let path = require('path');


let app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
let tableList = [];

app.post("/TestBodyPassing", (request,response) => {
    let theBody = request.body;
    console.log(theBody);

    response.send("SEENT!");
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