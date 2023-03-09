var express = require("express");
var router = express.Router();
const db = require("../model/helper");

//GET all posts
router.get("/", async (req, res) => {
	try {
		const response = await db("SELECT * from questions");
		const questions = response.data;
		res.send({ questions });
	} catch (err) {
		res.status(500).send(err);
	}
});

//not working due to issues with foreign key

// router.get("/", async (req, res) => {
//   const subject_id = req.query.id;
//   const questions = await db(
//     `SELECT * FROM questions WHERE subject_id = ${subject_id}`
//   );
//   res.status(200).json(question);
// });

//CREATE a question
router.post("/", async (req, res) => {
	const subject_id = req.body.subject_id;
	const questions = req.body.questions;
	try {
		// Loop through the questions in the array and insert them one by one
		for (let i = 0; i < questions.length; i++) {
			const question = questions[i].question;
			const answer = questions[i].answer;
			await db(
				`INSERT INTO questions (question, answer, subject_id) VALUES ("${question}","${answer}","${subject_id}")`
			);
		}
		res.status(200).end({ message: "created" });
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
});

/* router.post("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const questionsList = req.body.subject_id;
		for (let i = 0; i < questionsList.length; i++) {
			const question = questionsList[i].question;
			const answer = questionsList[i].answer;
			await db(`INSERT INTO questions (question, answer, subject_id) VALUES ("${question}","${answer}", ${id});`);
		}
		res.status(200).send();
	} catch (err) {
		res.status(400).send();
	}
});  */

module.exports = router;
