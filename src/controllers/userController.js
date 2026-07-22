const usersService = require("../services/usersService");

const db = require("../db/database");

const getAllUsers = () => {
  return usersService.getAllUsers();
  // return db.prepare("SELECT * FROM users").all();
};

const getUserById = (id) => {
  return usersService.getUserById(id);
  // return db.prepare("SELECT * FROM users WHERE id = ?").get(id);
};

module.exports = {
  getAllUsers,
  getUserById,
};
