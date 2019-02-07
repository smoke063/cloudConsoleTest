'use strict';
const store = require('../store/store')

const asyncHandler = fn => (req, res, next) =>
    Promise
        .resolve(fn(req, res, next))
        .catch(next);

const postEntry = asyncHandler(async (req, res, next) => {
    let { entry } = req.body;
    await store.saveEntry(entry);
    //TODO relocate this code
    await store.saveLog({ eventTime: +new Date(), eventType: 'dataAdded'});
    next();
    res.status(200).end();
});

const getEntries = asyncHandler(async (req, res, next) => {
    let entries = await store.getEntries();
    res.status(200).json(entries);
});

const getLogs = asyncHandler(async (req, res, next) => {
    let logs = await store.getLogs();
    res.status(200).json(logs);
});

const postLog = asyncHandler(async (req, res, next) => {
    const { log } = req.body;
    await store.saveLog(log);
    next();
    res.status(200).end();
});

module.exports = {
    postEntry: postEntry,
    getEntries: getEntries,
    getLogs: getLogs,
    postLog: postLog
};