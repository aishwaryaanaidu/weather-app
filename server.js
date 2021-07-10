const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

// Creating an instance named app invoking express
const app = express();
const apiKey = <api-key>;

// allows access to all of the static files within the ‘public’ folder
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));

// EJS -> Embedded Javascript
app.set('view engine', 'ejs');

// If we visit the root URL, Express will respond with the content inside.
app.get('/', function(req, res) {
    // res.send('Hello World!!!')

    // Render the view and then send equivalent HTML to the client
    res.render('index');
});

// Post request
app.post('/', function(req, res) {
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    request(url, function(err, response, body) {
        if(err) {
            res.render('index', { weather: null, error: 'Error, please try again'});
        } else {
            let weather = JSON.parse(body);
            if(weather.main == undefined) {
                res.render('index', { weather: null, error: 'Please enter a valid city'});
            } else {
                let weatherText = `It's ${ weather.main.temp } degrees in ${ weather.name }!!`;
                res.render('index', { weather: weatherText, error: null });
            }
        }
    })
});

// The server is listening on port 3000 for connections
app.listen(3000, function() {
    console.log("App is listening on port 3000!!")
})
