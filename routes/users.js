var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var db = require("../model/helper");
require("dotenv").config();
var bcrypt = require("bcrypt");
const saltRounds = 10;
var userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");

const supersecret = process.env.SUPER_SECRET;

router.get("/", async (req, res) => {
	try {
		// Query the database to get all users
		const response = await db("SELECT * FROM users");
		const users = response.data;
		// Send the list of users in the response
		res.send({ users });
	} catch (err) {
		// If there is an error, send a 500 response with the error message
		res.status(500).send(err);
	}
});
//get user by token
router.get("/name", userShouldBeLoggedIn, async (req, res) => {
	try {
		// Query the database to get all users
		const response = await db(`SELECT name FROM users where id=${req.user_id}`)
		console.log(response);
    res.send(response.data[0] );
	} catch (err) {
		// If there is an error, send a 500 response with the error message
		res.status(500).send(err);
	}
});

//to register new user
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hash = await bcrypt.hash(password, saltRounds);

    await db(
      `INSERT INTO users (name, email, password) VALUES ("${name}","${email}","${hash}")`
    );

    res.send({ message: "Register successful" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});
//to login existing user
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

      if (!correctPassword) throw new Error("Incorrect username or password");

      var token = jwt.sign({ user_id }, supersecret);
      res.send({ message: "Login successful, here is your token", token });
    } else {
      res.status(404).send()
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.get("/me/subjects", userShouldBeLoggedIn, async (req, res) => {
	const user_id = req.user_id;
	try {
    console.log("Helo", user_id);
		const response = await db(`
      SELECT users.name, subjects.id
      FROM subjects
      INNER JOIN users ON subjects.user_id = users.id
      WHERE users.id = ${user_id};
      `);
		res.send(response.data);
	} catch (err) {
		res.status(500).send(err);
	}
});


//get subjects by user id
//connect user table with subject by user_id (foreign key) in subject table
//we DONT need to get the questions. Already endoint
module.exports = router;
