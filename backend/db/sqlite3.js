var fs = require('fs');
var path = require("path");

const Database = require('better-sqlite3');

console.log("READING FILE: ", path.resolve(__dirname, "./dbSchema.sql"));
const dbSchema = fs.readFileSync(path.resolve(__dirname, "./dbSchema.sql")).toString();
const dbQuery = fs.readFileSync(path.resolve(__dirname, "./data.sql")).toString();
const db = new Database('hackathon.db', { verbose: console.log });
db.pragma('journal_mode = WAL');

let tableList = dbSchema.split(';');
tableList.forEach(element => {
    try {
        db.exec(element);
    } catch (error) {
        console.log(element);
        console.log(error);
    }
});

let dataList = dbQuery.split(';');
dataList.forEach(element => {
    try {
        db.exec(element);
    } catch (error) {
        console.log(element);
        console.log(error);
    }
});

module.exports = db;