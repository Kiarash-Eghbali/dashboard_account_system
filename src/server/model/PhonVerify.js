const Database = require("better-sqlite3");
const path = require("path");
const db = Database(path.join(__dirname, "phoneCode.db"));

db.exec(`
    CREATE TABLE IF NOT EXISTS phonecode (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        phone INTEGER UNIQUE NOT NULL,
        code INTEGER UNIQUE NOT NULL,
        expireAt TEXT NOT NULL,
        createdAt TEXT DEFAULT (datetime('now'))
    )    
`);


module.exports = db;