import React, { useState } from "react";
import { Link, useParams } from "react-router-dom"; //useNavigate not added yet
const BASE_URL = "http://localhost:5000";

function CreateQuestionForm({ onSubmit }) {
  //   const navigate = useNavigate();
  const [question, setQuestion] = useState({
    question: "",
    answer: "",
  });

  const { id } = useParams();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuestion({
      question: "",
      answer: "",
    });
    addQuestion(question);
  };

  const addQuestion = async (question) => {
    try {
      await fetch(`${BASE_URL}/questions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ subject_id: id, ...question }),
      });
      // navigate(`/subjects/${id}/questions`);
    } catch (err) {
      console.log("Oops, something went wrong");
    }
  };
  return (
    <>
      <div className="grid card bg-green-200 m-10 p-10 w-3/5 rounded-box place-items-center  shadow-xl ">
        <div className="btnform-control w-full max-w-xs">
          <h2 className="text-lg tracking-widest mb-5">
            Subject title - dynamic
          </h2>
        </div>
        <div className="btncard-body">
          <form>
            <label className="btnlabel font-semibold">
              Question:
              <input
                type="text"
                name="question"
                className=" btninput-bordered btninput border border-solid rounded border-gray-300  px-1  font-light w-full max-w-xs"
                value={question.question}
                onChange={(e) => handleChange(e)}
              />
            </label>
            <br />
            <label className="btnlabel font-semibold">
              Answer:
              <input
                type="text"
                name="answer"
                className=" btninput-bordered btninput border border-solid rounded border-gray-300  px-1  font-light w-full max-w-xs"
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
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default CreateQuestionForm;
