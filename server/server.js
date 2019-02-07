const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const router = require('./routes/routes');

const server = express()
    .use(app)
    .listen(3000, () => console.log('Listening on 3000'));

const socket = require('./socket/socket')(server);

const corsOptions = {
    origin: 'http://localhost:8080',
    credentials: true,
};

app.use(express.static(__dirname + '/client'));
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/entries', router.getEntries);
app.post('/api/entry', router.postEntry, socket.emitDataAdded);
app.get('/api/logs', router.getLogs);
app.post('/api/log', router.postLog, socket.emitLogAdded);

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Express error!');
});