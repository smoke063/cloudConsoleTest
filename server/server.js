const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const router = require('./routes/routes')
//socket config
const socketIO = require('socket.io');
const server = express()
    .use(app)
    .listen(3000, () => console.log('Listening Socket on ${ PORT }'));
const io = socketIO(server);

const redis = require("async-redis");
const client = redis.createClient();

client.on("error", function (err) {
    console.log("Error " + err);
});

//const Entry = require('./entry');

if (app.get('env') === 'development') {
    console.log('mode => ' + app.get('env'));
}

//app.set('views', __dirname + '/views');
//app.use(express.static(__dirname + "/public"));

const corsOptions = {
    origin: 'http://localhost:8080',
    credentials: true,
};
//for develope mode
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

io.on('connection', function (socket) {
    socket.emit('news', {hello: 'world'});
    socket.on('my other event', function (data) {
        console.log(data);
    });
});

app.get('/api/entries', async function(req, res){
    let entries = await client.hvals('entries');
    entries = entries.map((entry) => JSON.parse(entry));
    res.status(200).json(entries);
});

app.post('/api/entry', router.postEntry);

app.get('/api/logs', async function(req, res){
    const logs = await client.hgetall('logs');
    res.status(200).json(logs);
});

app.post('/api/log', function(req, res){
    const { eventType, eventTime} = req.body;
    client.hset('logs', eventTime, eventType);
    res.status(200).end();
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Express error!');
});