const redis = require("async-redis");
const client = redis.createClient();

client.on("error", function (err) {
    console.log("Error " + err);
});

class Entry {
    constructor(obj) {
        for(let key in obj)
            this[key] = obj;
    }
    async save(entry) {

        let res = await client.multi().rpush("entries:title", , entry.title, redis.print);
        console.log(res);
    }
}

/*async function test() {
    let res = await client.hset("entries", "hashtest 1", "some value", redis.print);
    console.log(res);
}*/

module.export = Entry;