const express = require('express');

// instead of creating server directly, we have helper function here
const app = express()

function requestCallback(request, response) {
    response.status(200).send(`request recieved`);
}

app.get('/', requestCallback)

app.get('/f', (request, response) => {
    // .set used to set the headers with response (in this case, the content type)
    response.status(200).set({ 'content-type': 'text/plain'}).send(`first request recieved`);
    console.log('first request wheeyy');
});

app.listen(3000)