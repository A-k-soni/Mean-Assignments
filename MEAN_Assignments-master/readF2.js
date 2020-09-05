const fs = require('fs');
const bb = require('bluebird');
const http = require('http');
bb.promisifyAll(fs);

const path = "C:/Users/hp/Desktop/New node/lala/src/node.txt";
const path1 = "C:/Users/hp/Desktop/New node/lala/src/node1.txt";

http.createServer((req, res) => {

    fs.readFileAsync(path, {
        encoding: "utf-8"
    }).then((data) => {
        res.write(data);
        return fs.readFileAsync(path1, {
            encoding: "utf-8"
        }).then((data) => {
            res.write(data);
            res.end();
        }).catch((err) => {
            console.log(err);
        })
    }).catch((err) => {
        console.log(err);
    })

}).listen(1080);