import React, { Link } from "react";

function Flashcard({ showAnswers, question, answer }) {
    return (
        <>
            <div className="flex flex-col border-opacity-50 justify-center items-center">
                <div className="w-[300px] h-[420px] bg-alga bg-transparent cursor-pointer group  ">
                    <div
                        className={`relative preserve-3d w-full h-full duration-1000 ${
                            showAnswers ? "my-rotate-y-180" : ""
                        }  }`}
                    >
                        <div className="card shadow absolute backface-hidden border-2 w-full h-full ">
                            <h1 className="card-body  text-center flex flex-col items-center justify-center h-full text-3xl font-semibold">
                                {question}
                            </h1>
                        </div>

                        <div className="card shadow absolute my-rotate-y-180 backface-hidden bg-mustard w-full h-full ">
                            <div
                                className={`card-body text-center flex flex-col items-center justify-center h-full text-gray-800 ${
                                    !showAnswers ? "bg-mustard " : ""
                                }`}
                            >
                                <p>{answer}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
/*
<Link to="/subjects">
						<button className="btn btn-sm bg-accent-focus marg mt-10">X</button>
					</Link>
                     */
export default Flashcard;
