<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 3385c62fcb71e5dfe7778568c7ae8afcc6c6a0d3
var express = require("express");
var router = express.Router();
const db = require("../model/helper");

<<<<<<< HEAD
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
module.exports = router;
=======
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
>>>>>>> 3385c62fcb71e5dfe7778568c7ae8afcc6c6a0d3
