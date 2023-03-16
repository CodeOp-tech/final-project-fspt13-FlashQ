import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Title from "./Title";

const BASE_URL = "http://localhost:5000";

function CreateSubjectForm() {
    const navigate = useNavigate();

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
        if (subject.subject === "") {
            alert("Please, write down the name of your subject :)");
            return;
        } else setSubject({ subject: "" });
        addSubject(subject);
    };
    const addSubject = async (subject) => {
        let token = localStorage.getItem("token");
        try {
            await fetch(`${BASE_URL}/subjects`, {
                method: "POST",
                headers: {
                    authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...subject }),
            });
            navigate("/subjects");
        } catch (err) {
            console.log("Oops, something went wrong");
        }
    };
    return (
        <>
            <Title />
            <section>
                <div className="justify-center">
                    <div
                        className="hero h-full   bg-cover mb-10"
                        style={{
                            backgroundImage: `url("https://img.freepik.com/free-photo/smartphone-screen-with-stationery-tools-student-lifestyle_53876-127104.jpg?w=996&t=st=1678796999~exp=1678797599~hmac=9add62e494edbc01993a04c77ae466469423b24483950f93f369de1a68e82003")`,
                        }}
                    >
                        <div className="hero-overlay bg-opacity-60 background-color: bg-stone-500"></div>
                        <div className="hero-content text-center ">
                            <div className=" border-opacity-50 items-center">
                                <div className="grid card m-10 p-10 w-100 rounded-box place-items-center shadow-xl bg-alga bg-opacity-40  ">
                                    <h2 className="text-lg tracking-widest mb-5">Create a new subject!</h2>

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
                                                <div className="mt-6">
                                                    <Link to="/subjects">
                                                        <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                                                            Go to subjects
                                                        </button>
                                                    </Link>
                                                    <button
                                                        type="submit"
                                                        className=" btn bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                                                    >
                                                        Submit
                                                    </button>
                                                </div>
                                            </label>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default CreateSubjectForm;
