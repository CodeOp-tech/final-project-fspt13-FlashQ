var express = require("express");
var router = express.Router();
const db = require("../model/helper");

//GET all subjects
router.get("/", async (req, res) => {
	try {
		// Query the database to get all subjects
		const response = await db("SELECT * FROM subjects");
		const subjects = response.data;
		// Send the list of subjects in the response
		res.send({ subjects });
	} catch (err) {
		// If there is an error, send a 500 response with the error message
		res.status(500).send(err);
	}
});

//GET one subject
router.get("/:id", async (req, res) => {
	const id = req.params.id;
	try {
		// Query the database to get the subject with the specified ID
		const response = await db(`SELECT * FROM subjects WHERE id = ${id}`);
		const subject = response.data[0];
		if (!subject) {
			// If the subject is not found, send a 404 response with an error message
			res.status(404).send({ message: "subject not found" });
			return;
		}
		// Send the subject in the response
		res.send({ subject });
	} catch (err) {
		// If there is an error, send a 500 response with the error message
		res.status(500).send(err);
	}
});

//CREATE one subject
router.post("/", async (req, res) => {
	const subjectName = req.body.name;
	try {
		// Insert a new subject into the database with the specified name
		await db(`INSERT INTO subjects (name) VALUE ("${subjectName}")`);
		// Send a 200 response with a success message
		res.status(200).send({ message: "subject created" });
	} catch (err) {
		// If there is an error, send a 500 response with the error message
		res.status(500).send(err);
	}
});

module.exports = router;
