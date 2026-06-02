const http = require('http');

const myServer = http.createServer((req, res) => {
    // console.log(req.headers) // this will log the headers of the request
    // console.log(req.url) // this will log the url of the request
    //console.log("new request received") // this will log a message every time a new request is received
    console.log("new request received");
    res.end("Hello from my server again!");
})

myServer.listen(8000, () => console.log("Server started"))