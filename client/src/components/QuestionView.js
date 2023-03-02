import React, { useEffect, useState } from "react";

function QuestionView(props) {
  const [questions, setQuestions] = useState([
    { question: "What is a string?", answer: "a sequence of characters" },
    { question: "What is a string?", answer: "a sequence of characters" },
    { question: "What is a string?", answer: "a sequence of characters" },
    { question: "What is a string?", answer: "a sequence of characters" },
  ]);

  return (
    <>
      <div>
        <h2>Questions in subject title - dynamic:</h2>
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
    </>
  );
}
export default QuestionView;
