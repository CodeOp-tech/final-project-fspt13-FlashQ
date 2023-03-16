import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import Title from "./Title";

const BASE_URL = `http://localhost:5000`;

function QuestionView(props) {
    const [questions, setQuestions] = useState([]);
    const [subject, setSubject] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await fetch(`${BASE_URL}/subjects/${id}/questions`);

            const data = await response.json();
            const questions = data;
            console.log(questions);
            setQuestions(questions);
        };
        const fetchSubject = async () => {
            const response = await fetch(`${BASE_URL}/subjects/${id}`);
            const data = await response.json();
            const subject = data.subject;
            setSubject(subject);
        };
        fetchQuestions();
        fetchSubject();
    }, []);

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
                            {/* <div className="max-w-lg"></div> */}
                            <div className=" border-opacity-50 items-center">
                                <div className="grid card m-10 p-10 w-100 rounded-box place-items-center shadow-xl bg-alga bg-opacity-40  ">
                                    <h2 className="text-lg tracking-widest mb-5">
                                        Questions in {subject ? subject.subject : null}:
                                    </h2>

                                    <div className=" p-1  m-1">
                                        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2  ">
                                            {questions.map((question, { id }) => (
                                                <div key={question.id} className="card shadow">
                                                    <div className="card-body  object-scale-down sm:object-contain bg-beige rounded-box bg-opacity-90 ">
                                                        <li key={id} onSubmit={props.addQuestion}>
                                                            <p className="card-title justify-center ">
                                                                {question.question}
                                                            </p>

                                                            <p>-{question.answer}</p>
                                                        </li>
                                                    </div>
                                                </div>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="btn-group grid grid-rows-3 rounded-md shadow-sm sm:inline-flex ">
                                    <Link to={`/subjects/${id}/create-question`}>
                                        <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                                            Add more questions
                                        </button>
                                    </Link>
                                    <Link to="/subjects">
                                        <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                                            Go to subjects
                                        </button>
                                    </Link>
                                    <Link to={`/subjects/${id}`}>
                                        <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                                            Start learning{" "}
                                        </button>
                                    </Link>
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
export default QuestionView;
