const fs = require('fs');
const path = "C:/Users/hp/Desktop/New node/lala/src/node.txt";
const path1 = "C:/Users/hp/Desktop/New node/lala/src/node1.txt";
fs.readFile(path, {
    encoding: "utf-8"
}, (err, data) => {
    console.log("user error")
    console.log(data);
    fs.readFile(path1, {
        encoding: "utf-8"
    }, (err, data) => {
        console.log(data);
    })

});