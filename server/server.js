var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var store = require('./store');

if (app.get('env') === 'development') {
    console.log('mode => ' + app.get('env'));
}

//app.set('views', __dirname + '/views');
//app.use(express.static(__dirname + "/public"));

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
};

app.use(allowCrossDomain);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/api/entries', function(req, res){
    //var userName = req.body.title;
    //var userAge = req.body.text;
    //debugger;
    res.send('get data');
});

app.get('/api/logs', function(req, res){
    res.send('hello world');
});

app.post('/api/entry', function(req, res){
    //var title = req.body.title;
    //var text = req.body.text;
    //res.send('hello world');
});

app.listen(3000, function () {
    store.connect();
    console.log('Server running port => 3000');
});