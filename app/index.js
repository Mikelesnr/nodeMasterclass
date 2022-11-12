//jshint esversion:6

/*
*Primary filr for the API
*
*/

//Dependencies
const http = require('http');
const url = require('url');

//The server sshould respond to all requests with a string
const server = http.createServer(function (req, res) {
    //Get the url and parse it
    const parsedUrl = url.parse(req.url, true);

    //Get the path
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+\/+$/g, '');

    //Get the query string as an object
    const queryStringObject = parsedUrl.query;

    //Get the http method
    const method = req.method.toLocaleLowerCase();

    //Get the headers as an object
    const headers = req.headers;

    //send the response
    res.end('Hello World!\n');


    //Log the request path
    console.log('Request is recieved with these headers: ', headers);


})


//Start the server, and have it listen on port 3000
server.listen(3000, function () {
    console.log("the server is listening on port 3000");
})
