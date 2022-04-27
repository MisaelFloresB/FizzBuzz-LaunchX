const fs = require("fs");

class Reader {
    static ReadJsonFile(path){
        const rawdata = fs.readFileSync(path);
        return JSON.parse(rawdata);
    }
}

module.export = Reader