"use strict";

var fs = require('fs');

var bb = require('bluebird');

var http = require('http');

bb.promisifyAll(fs);
var path = "C:/Users/hp/Desktop/New node/lala/src/node.txt";
var path1 = "C:/Users/hp/Desktop/New node/lala/src/node1.txt";
http.createServer(function (req, res) {
  fs.readFileAsync(path, {
    encoding: "utf-8"
  }).then(function (data) {
    res.write(data);
    return fs.readFileAsync(path1, {
      encoding: "utf-8"
    }).then(function (data) {
      res.write(data);
      res.end();
    })["catch"](function (err) {
      console.log(err);
    });
  })["catch"](function (err) {
    console.log(err);
  });
}).listen(1080);