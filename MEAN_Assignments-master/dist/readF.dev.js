"use strict";

var fs = require('fs');

var path = "C:/Users/hp/Desktop/New node/lala/src/node.txt";
var path1 = "C:/Users/hp/Desktop/New node/lala/src/node1.txt";
fs.readFile(path, {
  encoding: "utf-8"
}, function (err, data) {
  console.log("user error");
  console.log(data);
  fs.readFile(path1, {
    encoding: "utf-8"
  }, function (err, data) {
    console.log(data);
  });
});