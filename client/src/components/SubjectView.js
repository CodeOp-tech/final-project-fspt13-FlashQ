import React, { useEffect, useState } from "react";

function SubjectView(props) {
  const [subjects, setSubjects] = useState([{}]);
  return (
    <>
      <div className="grid card bg-green-200 m-10 p-10 w-3/5 rounded-box place-items-center  shadow-xl ">
        <h2 className="text-lg tracking-widest mb-5">
          Subjects you can start studying:
        </h2>
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
