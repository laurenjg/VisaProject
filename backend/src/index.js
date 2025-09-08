const express = require ('express');
const locationRouter = require('./locationRoutes');

const app = express();

app .use ('/api', locationRouter);

var server = app.listen(3000, function() {
    console.log('App is running!');
});