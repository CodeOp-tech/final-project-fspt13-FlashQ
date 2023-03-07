import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"; //useNavigate not added yet
import Title from "./Title";
const BASE_URL = "http://localhost:5000";

// This component is responsible for rendering a form for creating a new question
function CreateQuestionForm({ onSubmit }) {
  const navigate = useNavigate();
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
          "Content-Type": "application/zjson",
        },
        body: JSON.stringify({ subject_id: id, ...question }),
      });
      navigate(`/subjects/${id}/questions`);
    } catch (err) {
      console.log("Oops, something went wrong");
    }
  };
  return (
    <>
      <Title />
      <div className="flex flex-col border-opacity-50 justify-center items-center">
        <div className="grid card bg-green-200 m-5 p-5 w-4/5 text-justifyrounded-box place-items-center shadow-xl object-scale-down sm:object-contain sm:m-10 sm:p-10 sm:w-3/5">
          <div className="btnform-control w-full max-w-xs">
            <h2 className="text-lg tracking-widest mb-5">
              Add questions in subject {id}:
            </h2>
          </div>
          <div className="btncard-body">
            <form onSubmit={handleSubmit}>
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
                <button className="btn btn-sm bg-accent-focus marg mt-10">
                  Back{" "}
                  {/*not sure why this works but it goes back to the questions*/}
                </button>{" "}
                {/* <button className="btn btn-sm bg-accent-focus marg mt-10">
                  Add more questions
                </button> */}
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
      </div>
    </>
  );
}
export default CreateQuestionForm;
