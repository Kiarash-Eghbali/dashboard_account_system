const Database = require("better-sqlite3");
const path = require("path")
const db = Database(path.join(__dirname,"user.db"))


db.exec(`
	CREATE TABLE IF NOT EXISTS users (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		username TEXT UNIQUE NOT NULL,
		email TEXT UNIQUE NOT NULL,
		phone INTEGER UNIQUE NOT NULL,
		password TEXT NOT NULL,
		createdAt TEXT DEFAULT (datetime('now')),
		lastLogin TEXT DEFAULT NULL
	)


`);

module.exports = db;