const Database = require("better-sqlite3");

const db = new Database("data/users.db");

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT
  )
`,
).run();

module.exports = db;
