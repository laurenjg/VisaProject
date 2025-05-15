const { createServer } = require('node:http');

const server = createServer()

function requestCallback(request, response) {
    response.writeHead(200)
    response.end(`request recieved`);
}

server.on('request', requestCallback)

server.listen(3000)