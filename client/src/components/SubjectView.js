import React, { useEffect, useState } from "react";

function SubjectView(props) {
  const [subjects, setSubjects] = useState([{}]);
  return (
    <>
      <div>
        <h2>These are your topics/subjects:</h2>
      </div>
      <div>
        <ul>
          {subjects.map((subject) => (
            <li key={subject.id} onSubmit={props.addSubject}></li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default SubjectView;
