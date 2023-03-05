import React, { useState } from "react";
import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:5000";

function CreateSubjectForm() {
  // const navigate = useNavigate();

  const [subject, setSubject] = useState({
    subject: "",
  });
  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setSubject((subject) => {
      return {
        ...subject,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubject({ subject: "" });
    addSubject(subject);
  };

  const addSubject = async (subject) => {
    try {
      await fetch(`${BASE_URL}/subjects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(subject),
      });
    } catch (err) {
      console.log("Oops, something went wrong");
    }
  };
  return (
    <div className="grid card bg-green-200 m-10 p-10 w-3/5 rounded-box place-items-center  shadow-xl ">
      <div>
        <h2 className="text-lg tracking-widest mb-5">Create a new subject!</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label className="font-semibold">
            Subject:
            <input
              type="text"
              name="subject"
              className=" mt-1 btninput-bordered btninput border border-solid rounded border-gray-300  px-1  font-light w-full max-w-xs"
              placeholder="Math, history, HMTL, biology..."
              value={subject.subject}
              onChange={(e) => handleChange(e)}
            />
            <div>
              <button
                type="submit"
                className="btn btn-sm bg-accent-focus marg mt-10"
              >
                Submit
              </button>
            </div>
          </label>
        </form>
      </div>
    </div>
  );
}
export default CreateSubjectForm;
