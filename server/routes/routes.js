'use strict';
var Entry = require('../models/entry')

const asyncHandler = fn => (req, res, next) =>
    Promise
        .resolve(fn(req, res, next))
        .catch(next);

const postEntry = asyncHandler(async (req, res, next) => {
    let { entry } = req.body;
    entry =  new Entry();
    //client.hset('entries', eventTime, JSON.stringify(entry));
    //client.hset('logs', eventTime, eventType);
    await entry.save();
    res.status(200).end();
});

module.exports = {
    postEntry: postEntry
}