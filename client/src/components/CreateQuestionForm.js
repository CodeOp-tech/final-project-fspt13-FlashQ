import React, { useState } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";
// const BASE_URL = "http://localhost:5000";

function CreateQuestionForm({ onSubmit }) {
  //   const navigate = useNavigate();
  const [question, setQuestion] = useState({
    question: "",
    answer: "",
  });

  //   const { id } = useParams();

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setQuestion((question) => {
      return {
        ...question,
        [name]: value,
      };
    });
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setQuestion({
  //       question: "",
  //       answer: "",
  //     });
  //     addQuestion(question);
  //   };

  //   const addQuestion = async (question) => {
  //     try {
  //       await fetch(`${BASE_URL}/questions`, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ subject_id: id, ...question }),
  //       });
  //       navigate(`/subjects/${id}/questions`);
  //     } catch (err) {
  //       console.log("Oops, something went wrong");
  //     }
  //   };
  return (
    <>
      <div>
        <h2> Subject title - dynamic</h2>
      </div>
      <div>
        <form>
          <label>
            Question:
            <input
              type="text"
              name="question"
              value={question.question}
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label>
            Answer:
            <input
              type="text"
              name="answer"
              value={question.answer}
              onChange={(e) => handleChange(e)}
            />
          </label>
          <div>
            <button
              type="submit"
              className="btn btn-sm bg-accent-focus marg mt-10"
            >
              Add more questions
            </button>
            <button
              type="submit"
              className="btn btn-sm bg-accent-focus marg mt-10"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default CreateQuestionForm;
