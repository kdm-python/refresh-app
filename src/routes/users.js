const usersController = require("../controllers/userController");

const express = require("express");
const router = express.Router();

const db = require("../db/database");
// const users = db.prepare("SELECT * FROM users").all();

router.get("/", (req, res) => {
  const users = usersController.getAllUsers();
  res.json(users);
});

router.get("/:id", (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = usersController.getUserById(userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

module.exports = router;
