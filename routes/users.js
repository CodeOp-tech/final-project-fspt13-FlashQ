var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");

var db = require("../model/helper");
require("dotenv").config();
//var bcrypt = require("bcrypt");
const saltRounds = 10;

const supersecret = process.env.SUPER_SECRET;

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hash = await bcrypt.hash(password, saltRounds);

    await db(
      `INSERT INTO users (name, email, password) VALUES ("${name}", "${hash}")`
    );

    res.send({ message: "Register successful" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.post("/login", async (req, res) => {
  const { name, password } = req.body;

  try {
    const results = await db(
      `SELECT * FROM users WHERE name = "${name}"`
    );
    const user = results.data[0];
    if (user) {
      const user_id = user.id;

      const correctPassword = await bcrypt.compare(password, user.password);

      if (!correctPassword) throw new Error("Incorrect password");

      var token = jwt.sign({ user_id }, supersecret);
      res.send({ message: "Login successful, here is your token", token });
    } else {
      res.status(404).send()
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});


module.exports = router;
