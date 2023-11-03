const button = document.getElementById('nodeJSExample');
const message = document.getElementById('message');

button.addEventListener('click', () => {
    message.textContent = 'Button clicked! This is a Node.js example.';
});








// var express = require('express');
// var cookieParser = require('cookie-parser');
// var http = require('http');
// var app = express();
// app.use(cookieParser());
// var head = ["<!DOCTYPE html>", "<html>", "<head>",
//              "<title>Cookies</title>", "</head>", "<body>"];
// var url = "http://localhost:8082/cookie";
// var tail = [`<form action=${url}>`,
//             '<p>', 'Key <input name="name" value="">', '</p>',
//             '<p>', 'Value <input name="value" value="">', '</p>',
//             '<p>', 'Age <input name="age" value="">', '</p>',
//             '<p>', '<input type="submit"/>', 
//             '</form>', '</body>', '</html>'];
// var eol = '\n';
// app.get('/', function (req, res) {
//     res.send("Welcome to Cookie Test app!");
// });
// app.get('/cookie', function (req, res) {
//     var s = '';
//     for (var i in head) s += head[i] + eol;
//     if ( req.query.name != undefined && req.query.name != '' &&
//             req.query.value != undefined ) {
//         if ( isNaN(req.query.age) ) 
//             req.query.age = 0;
//         res.cookie(req.query.name, req.query.value, {maxAge: req.query.age});        
//     }
//     s += '<p>' + eol;
//     for (var i in req.cookies)
//         s += i + '=' + req.cookies[i] + '<br>' + eol;
//     s += '</p>' + eol;

//     for (var i in tail) s += tail[i] + eol;
//     res.send(s); // send web page
// });

// app.listen(8082, function() {console.log("Cookie test started on port 8082");});



// var http = require("http");

// //create a server object:
// http
//   .createServer(function(req, res) {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.write("Hello Web World!"); //write a response to the client
//     res.end(); //end the response
//   })
//   .listen(8080); //the server object listens on port 8080


// const express = require('express');
// const app = express();
// const port = 8082;
// app.get('/', function(req, res) {
//     res.send("Hello Express!");
// });
// // Starting the server, callback can be omitted
// app.listen(port, function() { 
//     console.log("Server is started on port" + port)
// });

// let express = require('express');
// let app = express();
// let help_server = require('./help_pages.js')
// const port = 8082;
// app.get('/', function(req, res) {   
//     res.send("Welcome to Hello Express");
// });
// app.use('/help', help_server);
// app.get('*', function(req, res) {  
//     res.send("Page not found in Hello Express!");
// });
// app.listen(port, function() { 
//     console.log("Server is started on port " + port)
// });


// var http = require('http');
// var fs   = require('fs');
// var path = require('path');

// http.createServer(function (request, response) {
//     console.log('request ', request.url);

//     var filePath = '.' + request.url;
//     if (filePath == './') { filePath = './index.html'; }

//     var extname = String(path.extname(filePath)).toLowerCase();
//     var mimeTypes = {
//         '.html': 'text/html',
//         '.js': 'text/javascript',
//         '.css': 'text/css',
//         '.json': 'application/json',
//         '.png': 'image/png',
//         '.jpg': 'image/jpg',
//          ...   // other types ommited
//     };

//     var contentType = mimeTypes[extname] || 'application/octet-stream';

//     fs.readFile(filePath, function(error, content) {
//         if (error) {
//             if(error.code == 'ENOENT') {
//                 fs.readFile('./404.html', function(error, content) {
//                     response.writeHead(404, { 'Content-Type': 'text/html' });
//                     response.end(content, 'utf-8');
//                 });
//             }
//             else {
//                 response.writeHead(500);
//                 response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
//             }
//         }
//         else {
//             response.writeHead(200, { 'Content-Type': contentType });
//             response.end(content, 'utf-8');
//         }
//     });

// }).listen(8125);
// console.log('Server running...');