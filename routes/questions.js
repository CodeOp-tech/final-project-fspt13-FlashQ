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

// router.get("/:id", async (req, res) => {
//   const subject_id = req.query.id;
//   const questions = await db(
//     `SELECT * FROM questions WHERE subject_id = ${subject_id}`
//   );
//   res.status(200).json(questions);
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
