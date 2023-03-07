import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Title from "./Title";

const BASE_URL = `http://localhost:5000`;
function Flashcard(props) {
  const [questions, setQuestions] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch(`${BASE_URL}/questions?id=${id}`);
      // const response = await fetch(`${BASE_URL}/subjects/${id}/questions`); also not working

      const data = await response.json();
      const questions = data.questions;
      setQuestions(questions);
    };
    fetchQuestions();
  }, []);

  return (
    <>
      <Title />
      <div className="grid card bg-green-200 m-5 p-5 w-4/5 text-justifyrounded-box place-items-center shadow-xl object-scale-down sm:object-contain sm:m-10 sm:p-10 sm:w-3/5">
        <div className=" p-1  m-1">
          <ul className="grid grid-cols-1 gap-4   ">
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
      </div>{" "}
    </>
  );
}
export default Flashcard;
