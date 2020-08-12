const express = require('express');

// Creating an instance named app invoking express
const app = express();

// allows access to all of the static files within the ‘public’ folder
app.use(express.static('public'));

app.set('view engine', 'ejs');

// If we visit the root URL, Express will respond with the content inside.
app.get('/', function(req, res) {
    // res.send('Hello World!!!')

    // Render the view and then send equivalent HTML to the client
    res.render('index');
})

// The server is listening on port 3000 for connections
app.listen(3000, function() {
    console.log("App is listening on port 3000!!")
})
