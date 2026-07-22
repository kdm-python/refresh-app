const db = require("../db/database");

const getAllUsers = () => {
  return db.prepare("SELECT * FROM users").all();
};

const getUserById = (id) => {
  return db.prepare("SELECT * FROM users WHERE id = ?").get(id);
};

