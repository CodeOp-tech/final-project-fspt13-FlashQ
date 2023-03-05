var express = require("express");
var router = express.Router();
const db = require("../model/helper");

module.exports = router;

//GET all subjects
router.get("/", async (req, res) => {
  try {
    const response = await "SELECT * FROM subjects";
    const subjects = response.data;
    res.send({ subjects });
  } catch (err) {
    res.status(500).send(err);
  }
});

//GET one subject

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const response = await db(`SELECT * FROM subjects WHERE id = ${id}`);
    const subject = response.data[0];
    if (!subject) {
      res.status(404).send({ message: "subject not found" });
      return;
    }
    res.send({ subject });
  } catch (err) {
    res.status(500).send(err);
  }
});

//CREATE one subject

router.post("/", async (req, res) => {
  const name = req.body.name;
  try {
    await db(`INSERT INTO subjects (name) VALUE ("${name}")`);
    res.status(200).send({ message: "subject created" });
  } catch (err) {
    res.status(500).send(err);
  }
});
