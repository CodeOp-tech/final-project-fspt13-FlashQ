import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Title from "./Title";

const BASE_URL = "http://localhost:5000";

function SubjectView(props) {
  // const id = props.questions.id;
  //   const { id } = useParams(); // i´m not sure what this is doing
  const [subjects, setSubjects] = useState([]);
  //   const [subject, setSubjects] = useState([]);

  //   const [questions, setQuestions] = useState([]);
  // const [questionsLength, setQuestionsLength] = useState([
  //   questions.length === null,
  // ]);
  //to try later
  //const questionsLength = questions.length;

  /* const fetchSubject = async () => {
		const response = await fetch(`${BASE_URL}/subjects/${id}`);
		console.log(response);
		console.log("this is the id" + { id });
		const data = await response.json();
		const subject = data.subject;
		setSubjects(subject);
		//setQuestions(subject.questions);
	}; */

  useEffect(() => {
    const fetchSubjects = async () => {
      const response = await fetch(`${BASE_URL}/subjects`);
      const data = await response.json();
      const subjects = data.subjects;
      //const questions = data.questions;
      setSubjects(subjects);
      //setQuestions(questions);
    };
    fetchSubjects();
  }, []);
  //   useEffect(() => {
  //     const fetchSubject = async () => {
  //       const response = await fetch(`${BASE_URL}/subjects/${id}`);
  //       const data = await response.json();
  //       const subjects = data.subjects;
  //       const questions = data.questions;
  //       setSubject(subject);
  //       setQuestion(question);
  //     };
  //     fetchSubject();
  //   }, [id]);

  return (
    <>
      <Title />
      <div className="flex flex-col border-opacity-50 justify-center items-center">
        <div className="grid card bg-green-200 m-5 p-5 w-4/5 text-justify rounded-box place-items-center shadow-xl object-scale-down sm:object-contain sm:m-10 sm:p-10 sm:w-3/5">
          <h2 className="text-lg tracking-widest mb-5">
            Select a subject to start studying:
          </h2>

          <ul>
            {subjects &&
              subjects.map((subject, index) => (
                <Link key={index} to={`/subjects/${subject.id}/questions`}>
                  <li
                    className="hover:font-bold not-italic cursor-pointer"
                    key={subject.id}
                    onSubmit={props.addSubject}
                  >
                    {subject.subject} -{/* Total question: {questionsLength} */}
                  </li>
                </Link>
              ))}
            {/* {subjects.map(subject => (
							<Link to={`/subjects/${subject.id}/questions`}>
								{" "}
								{/* http://localhost:5000/subjects/1/questions this is the route to get all question from one subject*/}
            {/* <li
									className="hover:font-bold not-italic cursor-pointer"
									key={subject.id}
									onSubmit={props.addSubject}
								>
									{subject.subject} -{/* Total question: {questionsLength} */}
            {/* </li>
							</Link>
						))}  */}
          </ul>

          <div>
            <Link to="/create-subject">
              <button className="btn btn-sm bg-accent-focus marg mt-10">
                create a new subject
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default SubjectView;
