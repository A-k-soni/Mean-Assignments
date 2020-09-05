const promise = require('bluebird');
const mysql = require('mysql');

promise.promisifyAll(require('mysql/lib/Connection').prototype);
promise.promisifyAll(require('mysql/lib/Pool').prototype);

const db_config = {

    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "mydb"


};


let addUser = async (input) => {

    const Connection = mysql.createConnection(db_config);
    await Connection.connectAsync();

    let sql = "INSERT INTO USER(USERNAME,PASSWORD,EMAIL,MOBILE) VALUES (?,?,?,?)";
    await Connection.queryAsync(sql, [
        input.username,
        input.password,
        input.email,
        input.mobile
    ]);
    await Connection.endAsync();


}


module.exports = {
    addUser
};