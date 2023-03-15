import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Timer from "./Timer";
import Title from "./Title";
import Flashcard from "./Flashcard";
import GameOver from "./GameOver";
import Footer from "./Footer";

const BASE_URL = `http://localhost:5000`;
//look into use timer hook
//creating a new timer, so one is responsible for the questions and the other for the answers
/*
starting from the timer
when the page loads we get the question
after 3 seconds get the answer
if counter === 0 -> show answer */
/*
create a new const timerAnswer, setTimerAnswer
when timerAswer === 0 -> i++ next question 
restart the timer 
*/

function Game(props) {
    const [questions, setQuestions] = useState([]); // Declare state for questions and setQuestions
    const [showAnswers, setShowAnswers] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Declare state for currentQuestionIndex and setCurrentQuestionIndex to update the index of the current question
    const [subject, setSubject] = useState(null);
    const [showWarningNoPreviousQuestion, setShowWarningNoPreviousQuestion] = useState(false);
    // const [questionCounter, setQuestionCounter]= useState(0)
    const { subjectId } = useParams();

    useEffect(() => {
        const fetchQuestions = async () => {
            //"/subjects/:subjectId/questions/:questionId"
            const response = await fetch(`${BASE_URL}/subjects/${subjectId}/questions`);

            const data = await response.json();
            const questions = data;
            //   console.log(questions);
            setQuestions(questions);
        };
        fetchQuestions();
    }, []);

    /*
    the one that we had before
     useEffect(() => {
		const fetchQuestions = async () => {
			const response = await fetch(`${BASE_URL}/questions?id=${id}`); // Fetch questions data based on the id prop passed to the Game component
			const data = await response.json(); // Convert response to JSON
			const questions = data.questions; // Get questions data from the response
			setQuestions(questions); // Update questions state with fetched questions data
		};

		fetchQuestions(); // Call fetchQuestions function
	}, [id]); */

    const handleNextQuestion = () => {
        // console.log("i am here");
        setShowAnswers(false);
        setCurrentQuestionIndex((index) => index + 1); // Update the index of the current question by incrementing it by 1
    };

    let handlePreviousQuestion = () => {
        if (currentQuestionIndex === 0) {
            setShowWarningNoPreviousQuestion(true);
        } else {
            setShowWarningNoPreviousQuestion(false);
            setCurrentQuestionIndex((index) => index - 1);
            setShowAnswers(false);
        }
    };

    const currentQuestion = questions[currentQuestionIndex]; // Get the current question based on the currentQuestionIndex state
    //   console.log({ currentQuestionIndex, currentQuestion });

    return (
        <>
            <Title />
            {/* Render the game over component once the last questions is reached  */}

            {currentQuestionIndex === questions.length ? <GameOver /> : ""}
            {/* Render the Timer component with isRunning and onTimerEnd props */}
            {currentQuestion && ( // Conditionally render the Flashcard component if there is a current question
                <Fragment>
                    <section>
                        <div>
                            <div
                                className="hero h-full   bg-cover mb-10"
                                style={{
                                    backgroundImage: `url("https://img.freepik.com/free-photo/smartphone-screen-with-stationery-tools-student-lifestyle_53876-127104.jpg?w=996&t=st=1678796999~exp=1678797599~hmac=9add62e494edbc01993a04c77ae466469423b24483950f93f369de1a68e82003")`,
                                }}
                            >
                                <div className="hero-overlay bg-opacity-60 background-color: bg-stone-500"></div>
                                <div className="flex flex-col border-opacity-50 ">
                                    <div className="m-20">
                                        {/* <div className="grid card bg-alga bg-opacity-60 m-5 p-5 text-justify rounded-box place-items-center shadow-xl  sm:m-10 sm:p-10"> */}{" "}
                                        <Flashcard
                                            question={currentQuestion.question} // Pass the current question to the Flashcard component as a prop
                                            answer={currentQuestion.answer} // Pass the current answer to the Flashcard component as a prop
                                            showAnswers={showAnswers}
                                        />
                                        <div className="flex border-opacity-50 justify-center items-center">
                                            <Timer
                                                //ponto de interrogação é pq o question é indefinido até o resultado do fetch
                                                key={currentQuestion.id}
                                                onTimerEnd={() => {
                                                    setShowAnswers(true);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-42 border-opacity-50 justify-center items-center ">
                                        {currentQuestionIndex !== 0 ? (
                                            <button
                                                className="btn g-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                                                onClick={handlePreviousQuestion}
                                            >
                                                prev
                                            </button>
                                        ) : null}
                                        {questions || showAnswers ? (
                                            <button
                                                className="btn bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                                                onClick={handleNextQuestion}
                                            >
                                                next
                                            </button>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Fragment>
            )}
            <Footer />
        </>
    );
}

export default Game;
