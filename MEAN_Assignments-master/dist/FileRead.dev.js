"use strict";

var fs = require('fs');

var bb = require('bluebird');

var path = "C:/Users/hp/Desktop/New node/lala/src/node.txt";
var path1 = "C:/Users/hp/Desktop/New node/lala/src/node1.txt";
bb.promisifyAll(fs);
fs.readFileAsync(path, {
  encoding: "utf-8"
}).then(function (data) {
  console.log(data);
  return fs.readFileAsync(path1, {
    encoding: "utf-8"
  }).then(function (data) {
    console.log(data);
  })["catch"](function (err) {
    console.log(err);
  });
})["catch"](function (err) {
  console.log(err);
});