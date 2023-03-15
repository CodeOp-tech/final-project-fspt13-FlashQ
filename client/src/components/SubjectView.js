import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Title from "./Title";

const BASE_URL = "http://localhost:5000";

function SubjectView(props, questions) {
  const [subjects, setSubjects] = useState([]);
  const { id } = useParams();

  // const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      const response = await fetch(`${BASE_URL}/subjects`);
      const data = await response.json();
      const subjects = data.subjects;
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
                // <Link key={index} to={`/subjects/${subject.id}/questions`}>
                <li
                  className="not-italic card-body m-5 p-2 pl-5 pr-10 bg-red-200 rounded-box "
                  key={subject.id}
                  onSubmit={props.addSubject}
                >
                  {subject.subject} - Total question:
                  {console.log(questions.length)}
                  <Link
                    className="inline-flex hover:stroke-2 hover:font-bold"
                    to={`/subjects/${subject.id}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      /* strokeWidth={1.5} not declaring width here, adding on parent component to change it on hover */
                      stroke="currentColor"
                      className="w-6 h-6"
                      alt="start playing"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                      />
                    </svg>
                    <span>Play game</span>
                  </Link>
                  <Link
                    className="inline-flex hover:stroke-2 hover:font-bold"
                    key={index}
                    to={`/subjects/${subject.id}/questions`}
                  >
                    {/* <Link to="/subjects/:id/questions"> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      /* strokeWidth={1.5} */
                      stroke="currentColor"
                      className="w-6 h-6"
                      alt="configuration"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Settings</span>
                  </Link>
                </li>
                // </Link>
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
