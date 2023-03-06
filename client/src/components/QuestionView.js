import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Title from "./Title";

const BASE_URL = "http://localhost:5000";

function QuestionView(props) {
  const [questions, setQuestions] = useState([
    // { question: "What is a string?", answer: "a sequence of characters" },
    // { question: "What is a string?", answer: "a sequence of characters" },
    // { question: "What is a string?", answer: "a sequence of characters" },
    // { question: "What is a string?", answer: "a sequence of characters" },
  ]);
  // const { subject } = useParams();// I want to get the input of subject from the API to change the tile dynamically
  const { id } = useParams();

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch(`${BASE_URL}/questions?id=${id}`);
      const data = await response.json();
      const questions = data.questions;
      setQuestions(questions);
    };
    fetchQuestions();
  }, []);

  return (
    <>
      <Title />
      <div className="flex flex-col border-opacity-50 justify-center items-center">
        <div className="grid card bg-green-200 m-10 p-10 w-3/5 rounded-box place-items-center  shadow-xl ">
          <div>
            <h2 className="text-lg tracking-widest mb-5">Questions in {id}:</h2>
          </div>
          <div className=" p-1  m-1">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2  ">
              {questions.map((question, { id }) => (
                <div className="card shadow">
                  <div className="card-body  object-scale-down sm:object-contain bg-red-200 rounded-box ">
                    <li key={question.id} onSubmit={props.addQuestion}>
                      <p className="card-title ">{question.question}</p>

                      <p>-{question.answer}</p>
                    </li>
                  </div>
                </div>
              ))}
            </ul>
          </div>
          <div>
            <Link to={`/subjects/${id}/create-question`}>
              <button className="btn btn-sm bg-accent-focus marg mt-10">
                Add more questions
              </button>
            </Link>
            <Link to="/subjects">
              <button className="btn btn-sm bg-accent-focus marg mt-10">
                Go to subjects
              </button>
            </Link>
          </div>
        </div>{" "}
      </div>
    </>
  );
}
export default QuestionView;
