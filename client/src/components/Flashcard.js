import React /* , { useEffect, useState }  */ from "react";

function Flashcard({ showAnswers, question, answer }) {
  return (
    <>
      <div className="flex flex-col border-opacity-50 justify-center items-center">
        <div className="grid card bg-green-200 m-5 p-5 w-4/5 text-justify rounded-box place-items-center shadow-xl object-scale-down sm:object-contain sm:m-10 sm:p-10 sm:w-3/5">
          <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group  ">
            <div
              className={`relative preserve-3d w-full h-full duration-1000 ${
                showAnswers ? "my-rotate-y-180" : ""
              }  }`}
            >
              <div className="card shadow absolute backface-hidden border-2 w-full h-full ">
                <h1 class="card-body  text-center flex flex-col items-center justify-center h-full text-3xl font-semibold">
                  {question}
                </h1>
              </div>

              <div className="card shadow absolute my-rotate-y-180 backface-hidden  bg-gray-100 w-full h-full ">
                <div
                  className={`card-body text-center flex flex-col items-center justify-center h-full text-gray-800 ${
                    !showAnswers ? "bg-gray-800 " : ""
                  }`}
                >
                  <p>{answer}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Flashcard;
