const db = require("./database");

const users = [
  { name: "Alice", email: "alice@test.com" },
  { name: "Bob", email: "bob@test.com" },
  { name: "Kyle", email: "kyle@kdm.co.uk" },
];

const insert = db.prepare("INSERT INTO users (name, email) VALUES (?, ?)");

users.forEach((u) => {
  insert.run(u.name, u.email);
});

const users_db = db.prepare("SELECT * FROM users").all();
console.log("Seeded users:", users_db);
