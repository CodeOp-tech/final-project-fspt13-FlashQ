import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BASE_URL = "http://localhost:5000";

function SubjectView(props) {
  const params = useParams();
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
      <div className="grid card bg-green-200 m-10 p-10 w-3/5 rounded-box place-items-center  shadow-xl ">
        <h2 className="text-lg tracking-widest mb-5">
          Subjects you can start studying:
        </h2>

        <ul>
          {subjects.map((subject) => (
            <li key={subject.id} onSubmit={props.addSubject}>
              {subject.subject}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default SubjectView;
