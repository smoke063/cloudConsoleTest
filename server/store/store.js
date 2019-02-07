'use strict';
const redis = require("async-redis");
const client = redis.createClient();

client.on("error", function (err) {
    console.log("Error " + err);
});

const saveEntry = async (entry) => {
    return await client.hset('entries', entry.id, JSON.stringify(entry));
};

const getEntries = async () => {
    let entries = await client.hvals('entries');
    return entries.map((item) => {
        let { entry, id } = JSON.parse(item);
        entry.id = id;
        return entry
    });
};

const getLogs = async () => {
    return await client.hgetall('logs');
};

const saveLog = async ({ eventTime, eventType }) => {
    return await client.hset('logs', eventTime, eventType);
};

module.exports = {
    saveEntry: saveEntry,
    getEntries: getEntries,
    getLogs: getLogs,
    saveLog: saveLog
};