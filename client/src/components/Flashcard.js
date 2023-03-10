import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Timer from "./Timer";
import Title from "./Title";

const BASE_URL = `http://localhost:5000`;
function Flashcard() {
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

      <Timer />

      <div className="flex flex-col border-opacity-50 justify-center items-center">
        <div className="grid card bg-green-200 m-5 p-5 w-4/5 text-justify rounded-box place-items-center shadow-xl object-scale-down sm:object-contain sm:m-10 sm:p-10 sm:w-3/5">
          <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group  ">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              <div className="card shadow absolute backface-hidden border-2 w-full h-full ">
                <h1 class="card-body  text-center flex flex-col items-center justify-center h-full text-3xl font-semibold">
                  What is a function?
                </h1>
              </div>
              <div className="card shadow absolute my-rotate-y-180 backface-hidden  bg-gray-100 w-full h-full ">
                <div class="card-body text-center flex flex-col items-center justify-center h-full text-gray-800 ">
                  <p>
                    -a set of statements that performs a task or calculates a
                    value
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* class name string int. if counter===0 add my-rotate class */}
          {/* <div className="grid card bg-green-200 m-5 p-5 w-4/5 text-justifyrounded-box place-items-center shadow-xl object-scale-down sm:object-contain sm:m-10 sm:p-10 sm:w-3/5"> */}
          {/* <div className=" p-1  m-1">
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
          </div> */}
          {/* </div>{" "} */}
        </div>
      </div>
    </>
  );
}
export default Flashcard;
