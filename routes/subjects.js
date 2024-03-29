var express = require("express");
const userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");
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
//getting the questions by subject id
router.get("/:id/questions", async (req, res) => {
	const subject_id = req.params.id;
	try {
		const response = await db(`
      SELECT subjects.subject, questions.id, questions.question, questions.answer
      FROM questions
      INNER JOIN subjects ON questions.subject_id = subjects.id
      WHERE subjects.id = ${subject_id};
      `);
		res.send(response.data);
	} catch (err) {
		res.status(500).send(err);
	}
});
//GET questions from one subject
// router.get("/:id/questions", async (req, res) => {
// 	const id = req.params.id;
// 	try {
// 		const response = await db(`SELECT * FROM questions WHERE subject_id = ${id}`);
// 		// const subject = response.data[0];
// 		// if (!subject) {
// 		//   res.status(404).send({ message: "subject not found" });
// 		//   return;
// 		// }
// 		res.send(response.data);
// 	} catch (err) {
// 		res.status(500).send(err);
// 	}
// });
//CREATE one subject
router.post("/", userShouldBeLoggedIn, async (req, res) => {
	const subject = req.body.subject;
	const user_id = req.user_id;
	try {
		// Insert a new subject into the database with the specified name
		await db(`INSERT INTO subjects (subject, user_id) VALUE ("${subject}", ${user_id})`);
		// Send a 200 response with a success message
		res.status(200).send({ message: "subject created" });
	} catch (err) {
		// If there is an error, send a 500 response with the error message
		res.status(500).send(err);
	}
});
//DELETE one subject
router.delete("/:id", async (req, res) => {
	const id = req.params.id;
	try {
		const response = await db(`SELECT * FROM subjects WHERE id = ${id}`);
		const subject = response.data[0];
		if (!subject) {
			res.status(404).send({ message: "subject not found" });
			return;
		}
		await db(`DELETE FROM subjects WHERE id=${id}`);
		res.status(200).send({ message: "subject deleted" });
	} catch (err) {
		res.status(500).send(err);
	}
});
//GET all subjects
/* router.get("/", async (req, res) => {
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
}); */

//GET one subject
/* console.log("test");
router.get("/:id", async (req, res) => {
	const id = req.params.id;
	const user_id = req.params.user_id;
	console.log(id);
	try {
		// Query the database to get the subject with the specified ID
		const response = await db(`SELECT * FROM subjects WHERE id = ${user_id}`);
		const subject = response.data[0];
		console.log("subject" + subject);
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
}); */

//GET questions from one subject
/* router.get("/:id/questions", async (req, res) => {
	const id = req.params.id;
	try {
		const response = await db(`SELECT * FROM questions WHERE subject_id = ${id}`);
		// const subject = response.data[0];
		// if (!subject) {
		//   res.status(404).send({ message: "subject not found" });
		//   return;
		// }
		res.send(response.data);
	} catch (err) {
		res.status(500).send(err);
	}
}); */
//CREATE one subject
/* router.post("/", async (req, res) => {
	const subject = req.body.subject;
	try {
		// Insert a new subject into the database with the specified name
		await db(`INSERT INTO subjects (subject) VALUE ("${subject}")`);
		// Send a 200 response with a success message
		res.status(200).send({ message: "subject created" });
	} catch (err) {
		// If there is an error, send a 500 response with the error message
		res.status(500).send(err);
	}
}); */
/* router.post("/", async (req, res) => {
	const subject = req.body.subject.subject;
	try {
		// Insert a new subject into the database with the specified name
		await db(`INSERT INTO subjects (subject) VALUE ("${subject}")`);
		// Send a 200 response with a success message
		res.status(200).send({ message: "subject created" });
	} catch (err) {
		// If there is an error, send a 500 response with the error message
		res.status(500).send(err);
	}
}); */
/* router.post("/", async (req, res) => {
  const subject = req.body.subject;
  try {
    // Insert a new subject into the database with the specified name
    await db(`INSERT INTO subjects (subject) VALUE ("${subject}")`);
    // Send a 200 response with a success message
    res.status(200).send({ message: "subject created" });
  } catch (err) {
    // If there is an error, send a 500 response with the error message
    res.status(500).send(err);
  }
  }); */

//DELETE one subject
/* router.delete("/:id", async (req, res) => {
	const id = req.params.id;
	try {
		const response = await db(`SELECT * FROM subjects WHERE id = ${id}`);
		const subject = response.data[0];
		if (!subject) {
			res.status(404).send({ message: "subject not found" });
			return;
		}
		await db(`DELETE FROM subjects WHERE id=${id}`);
		res.status(200).send({ message: "subject deleted" });
	} catch (err) {
		res.status(500).send(err);
	}
}); */
module.exports = router;

/* we checked here */
