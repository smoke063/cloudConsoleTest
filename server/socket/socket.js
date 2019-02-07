'use strict';
const socketIO = require('socket.io');

var io = {};

const emitDataAdded = (req, res, next) => {
    let { entry } = req.body;
    io.sockets.emit('dataAdded', entry);
    next();
};

const emitLogAdded = (req, res, next) => {
    let { log } = req.body;
    io.sockets.emit('logAdded', log);
    next();
};

module.exports = function (server) {

    io = socketIO(server);

    return {
        emitDataAdded: emitDataAdded,
        emitLogAdded: emitLogAdded
    };
};