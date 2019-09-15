// var http = require('http');

// const PORT = 8080;

// function requestHandler(req, res) {
// 	res.end(`Hello ${process.platform}`);
// }

// var server = http.createServer(requestHandler);

// server.listen(PORT, function(){
// 	console.log(`${process.env.NODE_ENV} server listening on port: ${PORT}. CTRL-C to exit.`);
// });

// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
// 	res.statusCode = 200;
// 	res.setHeader('Content-Type', 'text/plain');
// 	res.end('WE BE WORKING 2\n');
// });
// server.listen(port, hostname, () => {
// 	console.log(`Server running at http://${hostname}:${port}/`);
// });

'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
	res.send(`Hello, Docker is running on ${process.platform}\n`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);