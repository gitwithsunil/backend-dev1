Why NODE js -->

- Node js is used to build backend services like API's for web apps, mobile apps or web servers.


1. Easy to get started
2. scalability -> it scales both horizontally & vertically .
3. real-time web apps
4. unified language
5. Rich Ecosystem 

How Node js works -->

- Node accept the request from the client and send the response , while working with the request node.js handles them with a single thread .
- To operate I/O operation/request node js use the concept thread.




- get , post , put , patch ,delete
- GET - retrive data from the server
- POST - send data to the server
- PUT - update data on the server
- PATCH - update part of the data on the server
- DELETE - delete data from the server 

NODE JS File System :

- the file system module in node js is  a built in API used to perform file & directory related operations on the server.
- the file system module provides both synchronous and asynchronous methods to work with the file system.
- DIRECTORT MANAGEMENT : The file system module is used to read , write , update , delete files and directories on the server. 
- imoted using -> const fs = require('fs');


HTTP Server :-

- The node js http module is a core built-in module that allows you to create an HTTP server. It provides functionalities to handle HTTP requests and responses, making it possible to build web applications and APIs.

- To create an HTTP server using the http module, you can use the createServer method. This method takes a callback function that will be executed every time a request is made to the server. The callback function receives two parameters: req (the request object) and res (the response object).   
Here's a simple example of how to create an HTTP server using the http module:
```javascript
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set the response header
    res.end('Hello, World!'); // Send the response body and end the response
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
```
In this example, we create an HTTP server that listens on port 3000. When a request is made to the server, it responds with "Hello, World!" and sets the content type to plain text. You can access this server by navigating to http://localhost:3000 in your web browser. 

Features of the Node js (http module) include:
1. Handling HTTP Requests and Responses: The http module allows you to easily handle incoming HTTP requests and send responses back to the client.
2. Routing: You can implement routing logic to handle different URLs and HTTP methods (GET, POST, etc.) to create a more complex web application.
3. Middleware Support: You can use middleware functions to process requests and responses, allowing for tasks like authentication, logging, and data parsing.
4. Streaming: The http module supports streaming data, which is useful for handling large files or real-time data.
5. HTTPS Support: The https module, which is built on top of the http module, allows you to create secure HTTPS servers using SSL/TLS certificates.
6. Event-Driven Architecture: The http module is built on Node.js's event-driven architecture, making it efficient and scalable for handling multiple concurrent connections.   








