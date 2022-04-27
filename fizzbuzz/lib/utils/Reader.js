const fs = require("fs");

class Reader {
    static ReadJsonFile(){
        const Reader = require('./lib/utils/Reader.js');
        const explorers = fs.readFileSync("explorers.json");
    }
}