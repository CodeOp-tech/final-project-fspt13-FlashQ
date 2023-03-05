import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BASE_URL = "http://localhost:5000";

function QuestionView(props) {
  const [questions, setQuestions] = useState([
    // { question: "What is a string?", answer: "a sequence of characters" },
    // { question: "What is a string?", answer: "a sequence of characters" },
    // { question: "What is a string?", answer: "a sequence of characters" },
    // { question: "What is a string?", answer: "a sequence of characters" },
  ]);
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
      <div className="grid card bg-green-200 m-10 p-10 w-3/5 rounded-box place-items-center  shadow-xl ">
        <div>
          <h2 className="text-lg tracking-widest mb-5">
            Questions in subject title - dynamic:
          </h2>
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
      </div>
    </>
  );
}
export default QuestionView;
