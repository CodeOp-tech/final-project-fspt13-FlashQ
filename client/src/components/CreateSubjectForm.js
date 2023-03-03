import React, { useState } from "react";

function CreateSubjectForm() {
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
  return (
    <div className="grid card bg-green-200 m-10 p-10 w-3/5 rounded-box place-items-center  shadow-xl ">
      <div>
        <h2 className="text-lg tracking-widest mb-5">Create a new subject!</h2>
      </div>
      <div>
        <form>
          <label className="font-semibold">
            {" "}
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
