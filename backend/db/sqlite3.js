var sqlite3 = require('sqlite3').verbose()
var fs = require('fs');

const dbSchema = fs.readFileSync('./dbSchema.sql').toString();

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message);
      throw err;
    } else {
        console.log('Connected to the SQLite database.')
    }
});

const dataArr = dbSchema.toString().split(');');

db.serialize(() => {
    // db.run runs your SQL query against the DB
    db.run('PRAGMA foreign_keys=OFF;');
    db.run('BEGIN TRANSACTION;');
    // Loop through the `dataArr` and db.run each query
    dataArr.forEach((query) => {
        if(query) {
        // Add the delimiter back to each query before you run them
        // In my case the it was `);`
        query += ');';
        db.run(query, (err) => {
            if(err) throw err;
        });
        }
    });
    db.run('COMMIT;');
});

module.exports = db;