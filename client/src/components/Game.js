import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Timer from "./Timer";
import Title from "./Title";
import Flashcard from "./Flashcard";
import GameOver from "./GameOver";

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
		setCurrentQuestionIndex(index => index + 1); // Update the index of the current question by incrementing it by 1
	};

	let handlePreviousQuestion = () => {
		if (currentQuestionIndex === 0) {
			setShowWarningNoPreviousQuestion(true);
		} else {
			setShowWarningNoPreviousQuestion(false);
			setCurrentQuestionIndex(index => index - 1);
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
					<div className="flex border-opacity-50 justify-center items-center">
						<Timer
							//ponto de interrogação é pq o question é indefinido até o resultado do fetch
							key={currentQuestion.id}
							onTimerEnd={() => {
								setShowAnswers(true);
							}}
						/>
					</div>
					<div>
						<Flashcard
							question={currentQuestion.question} // Pass the current question to the Flashcard component as a prop
							answer={currentQuestion.answer} // Pass the current answer to the Flashcard component as a prop
							showAnswers={showAnswers}
						/>
					</div>
					<div className="flex gap-42 border-opacity-50 justify-center items-center ">
						{currentQuestionIndex !== 0 ? (
							<button
								className="btn btn-sm bg-accent-focus marg inline-flex p-2 m-32 sm:mt-10"
								onClick={handlePreviousQuestion}
							>
								prev
							</button>
						) : null}
						{questions || showAnswers ? (
							<button
								className="btn btn-sm bg-accent-focus marg inline-flex p-2 m-32 sm:mt-10"
								onClick={handleNextQuestion}
							>
								next
							</button>
						) : null}
						{/* {showWarningNoPreviousQuestion ? (
              <h1>there are no previous questions</h1>
            ) : null} i don't think this is so necessary */}
					</div>
				</Fragment>
			)}
		</>
	);
}

export default Game;
