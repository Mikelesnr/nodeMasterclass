//jshint esversion:6

/*
*Primary filr for the API
*
*/

//Dependencies
const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

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

    //Get the payload, if any
    const decoder = new StringDecoder('utf-8');
    let buffer = "";
    req.on('data', function (data) {
        buffer += decoder.write(data);
    });
    req.on('end', function () {
        buffer += decoder.end();

        //send the response
        res.end('Hello World!\n');

        //Log the request path
        console.log('Request is recieved with this payload: ', buffer);
    });

})


//Start the server, and have it listen on port 3000
server.listen(3000, function () {
    console.log("the server is listening on port 3000");
})
