import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Title from "./Title";

const BASE_URL = "http://localhost:5000";

function SubjectView(props) {
  const { id } = useParams(); // i´m not sure what this is doing
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      const response = await fetch(`${BASE_URL}/subjects`);
      const data = await response.json();
      const subjects = data.subjects;
      setSubjects(subjects);
    };
    fetchSubjects();
  }, []);

  return (
    <>
      <Title />
      <div className="flex flex-col border-opacity-50 justify-center items-center">
        <div className="grid card bg-green-200 m-10 p-10 w-3/5 rounded-box place-items-center  shadow-xl ">
          <h2 className="text-lg tracking-widest mb-5">
            Select a subject to start studying:
          </h2>

          <ul>
            {subjects.map((subject) => (
              <Link to={`/subjects/${subject.id}/questions`}>
                <li
                  className="hover:font-bold not-italic cursor-pointer"
                  key={subject.id}
                  onSubmit={props.addSubject}
                >
                  {subject.subject}
                </li>
              </Link>
            ))}
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
