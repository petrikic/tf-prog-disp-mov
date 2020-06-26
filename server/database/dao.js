
const sqlite = require('sqlite-sync');
sqlite.connect('./database/database.db3');


const SQL_CREATE = `CREATE TABLE IF NOT EXISTS Users(
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        username TEXT UNIQUE,
                        password TEXT,
                        urlPhoto
                    );`;

sqlite.run(SQL_CREATE);

module.exports = sqlite;