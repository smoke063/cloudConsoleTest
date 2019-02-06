'use strict';
const redis = require("async-redis");
const client = redis.createClient();

client.on("error", function (err) {
    console.log("Error " + err);
});

class Entry {
    constructor(obj){
        for(let key in obj)
            this[key] = obj[key];
    }
    async save() {
        await client.hset('entries', this.id, JSON.stringify(this));
    }
}

module.export = Entry