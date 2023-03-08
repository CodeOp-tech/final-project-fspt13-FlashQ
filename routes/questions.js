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
	const question = req.body.question;
	const answer = req.body.answer;
	const subject_id = req.body.subject_id;
	try {
		const addQuestion = await db(
			`INSERT INTO questions (question, answer, subject_id) VALUES    ("${question}","${answer}","${subject_id}")`
		);
		res.status(200).send({ message: "question created" });
	} catch (err) {
		res.status(500).send(err);
	}
});

router.post("/", async (req, res) => {
	/* const subject_id = req.params.subject_id; //before it was .body */
	try {
		/* const existingSubject = await db(`SELECT * FROM questions WHERE subject_id="${subject_id}"`);
		if (existingSubject.data.length > 0) {
			return res.status(400).send({ error: "Subject already exists" });
		} */
		/* const addSubject = await db(`INSERT INTO subjects (subject) VALUE ("${subject}")`);
		if (addSubject.insertId) {
			const insertId = addSubject.insertId;
			 */ //before was .questionsList
		const id = req.params.id;
		const questionsList = req.body.questions;
		for (let i = 0; i < questionsList.length; i++) {
			const question = questionsList[i].question;
			const answer = questionsList[i].answer;
			await db(`INSERT INTO questions (question, answer, subject_id) VALUES ("${question}","${answer}", ${id});`);
		}
		res.send({ subject_id: id });
		res.status(400).send("Could not insert question");
	} catch (err) {
		/* else { */
		res.status(400).send({ error: err.message });
	}
	/* } */
});

module.exports = router;
