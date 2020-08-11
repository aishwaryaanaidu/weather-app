const express = require('express');

// Creating an instance named app invoking express
const app = express();

// If we visit the root URL, Express will respond with “Hello World!”.
app.get('/', function(req, res) {
    res.send('Hello World!!!')
})

// The server is listening on port 3000 for connections
app.listen(3000, function() {
    console.log("App is listening on port 3000!!")
})
