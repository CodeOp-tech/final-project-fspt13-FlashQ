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

router.post("/create", async (req, res) => {
	const subject = req.body.subject;
	try {
		const existingSubject = await db(`SELECT * FROM subjects WHERE subject="${subject}"`);
		if (existingSubject.data.length > 0) {
			return res.status(400).send({ error: "Subject already exists" });
		}
		const addSubject = await db(`INSERT INTO subjects (subject) VALUE ("${subject}")`);
		if (addSubject.insertId) {
			const insertId = addSubject.insertId;
			const questionsList = req.body.presentList;
			for (let i = 0; i < questionsList.length; i++) {
				const question = questionsList[i].question;
				const answer = questionsList[i].answer;
				await db(
					`INSERT INTO questions (question, answer, subject_id) VALUES ("${question}","${answer}", ${insertId});`
				);
			}
			res.send({ subject_id: insertId });
		} else {
			res.status(400).send("Could not insert subject");
		}
	} catch (err) {
		res.status(400).send({ error: err.message });
	}
});
/* router.post("/create", async (req, res) => {
	const subject = req.body.subject;
	try {
		console.log("Solicitud de back-end recibida");
		const addQuestions = await db(`INSERT INTO subjects (subject) VALUE ("${subject}")`); // Insert a new question and answer into the database with the provided subject
		// Now we need to add the questions
		if (addQuestions.insertId) {
			// If a new row was successfully inserted
			const insertId = addQuestions.insertId; // Store the ID of the newly inserted row
			const questionsList = req.body.presentList; // Retrieve present list from the request body
			for (let i = 0; i < questionsList.length; i++) {
				// Iterate through each question in the questions list
				const question = questionsList[i].question; // Retrieve present name
				const answer = questionsList[i].answer; // Retrieve present URL
				await db(
					// Insert a new row into the "questions" table with the question and answer and the ID of the newly inserted row in the "subjects" table
					`INSERT INTO questions (question, answer, subject_id) VALUES ("${question}","${answer}", ${insertId});`
				);
			}
			res.send({ subject_id: insertId }); // Return the ID of the newly created list to the client
		} else {
			res.status(400).send("Could not insert list"); // If a new row was not inserted, send an error response to the client
		}
	} catch (err) {
		res.status(400).send({ error: err.message }); // If an error occurred, send an error response to the client with the error message
	}
}); */
module.exports = router;
