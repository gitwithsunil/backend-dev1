const http = require('http');
const fs = require('fs');


const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Req Received\n`;

    fs.appendFile('log.txt', log, (err) => {
        if (err) console.error(err);
    });

    switch (req.url) {
        case '/':
            res.end('Hello from my server!');
            break;

        case '/about':
            res.end('This is the about page');
            break;

        case '/contact':
            res.end('This is the contact page');
            break;

        default:
            res.end('Page not found');
    }
});

myServer.listen(8000, () => {
    console.log('Server started on port 8000');
});