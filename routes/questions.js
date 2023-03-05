<<<<<<< HEAD
var express = require("express");
var router = express.Router();
const db = require("../model/helper");

module.exports = router;
||||||| dd03b83
=======
var express = require("express");
var router = express.Router();
const db = require("../model/helper");

router.get("/:id", async (req, res) => {
	const id = req.params.id;

	try {
		const result = await db(`SELECT * from subjects WHERE id = ${id}`);
		const subjects = result.data;
		const subject = subjects[0];

		if (!subject) {
			res.status(404).send();
			return;
		}
		const questionId = req.params.id;
		const questionResult = await db(`SELECT * from presents WHERE list_id = ${questionId};`);
		subject.questions = questionResult.data;

		res.send(subject);
	} catch (err) {
		res.status(500).send("Something went wrong");
	}
});

//router.post is gonna add a list, save the last id added,
// add the presents, return the list id to the client
router.post("/", async (req, res) => {
	try {
		console.log("Solicitud de backend recibida");
		const subject = req.body.subject;
		const addSubject = await db(`INSERT INTO subjects (subject) VALUES ("${subject}");`);
		//now I need to add the questions in the subjects
		if (addSubject.insertId) {
			const insertId = addSubject.insertId;
			const subjects = req.body.subjects;
			for (let i = 0; i < subjects.length; i++) {
				const questions = subjects[i].questions;
				const answer = subjects[i].answer;
				await db(
					`INSERT INTO questions (question, answer, subject_id) VALUES ("${questions}", "${answer}", ${insertId});`
				);
			}
			res.send({ newSubject: insertId }); //return of my post
		} else {
			res.status(400).send("Could not insert list");
		}
	} catch (err) {
		res.status(400).send({ error: err.message });
	}
});

module.exports = router;
>>>>>>> a06b8afce1d354ff01aba590876a9b4d26dde9ac
