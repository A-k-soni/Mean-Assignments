const promise = require('bluebird');
const mysql = require('mysql');
promise.promisifyAll(require("mysql/lib/Connection").prototype);
promise.promisifyAll(require("mysql/lib/Pool").prototype);
const config = {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "mydb"
};
let db = async () => {
    try {
        const con = mysql.createConnection(config);
        await con.connectAsync();
        console.log("Connection success");

        let q = "select * from customers";

        let result = await con.queryAsync(q);

        console.log(result);


        con.end();

    } catch (err) {
        console.log(err);
    }
}

db();