const fs = require('fs');
const bb = require('bluebird');


const path = "C:/Users/hp/Desktop/New node/lala/src/node.txt";
const path1 = "C:/Users/hp/Desktop/New node/lala/src/node1.txt";

bb.promisifyAll(fs);

fs.readFileAsync(path, {
    encoding: "utf-8"
}).then((data) => {
    console.log(data);

    return fs.readFileAsync(path1, {
        encoding: "utf-8"
    }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    });

}).catch((err) => {
    console.log(err);

});